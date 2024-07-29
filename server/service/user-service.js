const db = require('../db')
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDTO = require('../dtos/user-dtos');

class UserServise{
    async registration(email, password){
        const exist = await db.query(`SELECT email FROM "user" WHERE email = $1`, [email]);
        if (exist.rowCount !== 0){
            throw new Error(`Пользователь с таким почтовым адресом ${email} уже существует`);
        }
        const URL = "http://localhost:5000"
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await db.query(`INSERT INTO "user" (email, password, isActivated, activationLink) values ($1, $2, $3, $4) RETURNING *`, [email, hashPassword, false, activationLink]);
        await mailService.sendActivationMale(email, `${URL}/api/activate/${activationLink}`);
        const userDTO = new UserDTO(user.rows[0]);
        const tokens = tokenService.generateToken({...userDTO});
        tokenService.saveToken(userDTO.email, tokens.refreshToken);
        return {...tokens, userDTO};
    }

    async activation(activationLink){
        const exist = await db.query(`SELECT activationLink FROM "user" WHERE activationLink = $1`, [activationLink]);
        if (exist.rowCount === 0){
            throw new Error("Неккоректная ссылка активации");
        }
        await db.query(`UPDATE "user" SET isactivated = true WHERE activationLink = $1`, [activationLink])
    }

    async login(email, password){
        const user = await db.query(`SELECT * from "user" WHERE email = $1`, [email]);
        if (user.rowCount === 0){
            throw new Error(`Пользователь не найден`);
        }
        if (!bcrypt.compare(password, user.rows[0].password)){
            throw new Error(`Неправильный пароль`);
        }
        const userDTO = new UserDTO(user.rows[0]);
        const tokens = tokenService.generateToken({...userDTO});
        tokenService.saveToken(userDTO.email, tokens.refreshToken);
        return {...tokens, userDTO};
    }

    async logout(refreshToken){
        return await tokenService.removeToken(refreshToken);
    }

    async refresh(refreshToken){
        if (!refreshToken){
            throw new Error('Пользователь не авторизован');
        }
        const userData = await tokenService.validateRefreshToken(refreshToken);
        const tokenInDB = await db.query(`SELECT * FROM token WHERE refreshToken = $1`, [refreshToken]);
        if (!userData || tokenInDB.rowCount === 0){
            throw new Error("Пользователь не авторизован");
        }
        const user = await db.query(`SELECT * from "user" WHERE email = $1`, [tokenInDB.rows[0].email]);
        const userDTO = new UserDTO(user.rows[0]);
        const tokens = tokenService.generateToken({...userDTO});
        tokenService.saveToken(userDTO.email, tokens.refreshToken);
        return {...tokens, userDTO};
    }
}

module.exports = new UserServise();