const jwt = require('jsonwebtoken');
const db = require('../db');

const JWT_access = "jwtAccess";
const JWT_refresh = "jwtRefresh";

class TokenService{
    generateToken(payload){
        const accessToken = jwt.sign(payload, JWT_access, {expiresIn: '30m'});
        const refreshToken = jwt.sign(payload, JWT_refresh, {expiresIn: '30d'});
        return {
            accessToken, 
            refreshToken
        }
    }

    async saveToken(user, refreshToken){
        const tokenData = await db.query(`SELECT id FROM token WHERE "user" = $1`, [user]);
        if (tokenData.rowCount !== 0){
            return await db.query(`UPDATE token SET refreshToken = $1 WHERE id = $2`, [refreshToken, tokenData.rows[0].id])
        }
        const token = await db.query(`INSERT INTO token ("user", refreshtoken) VALUES ($1, $2)`, [user, refreshToken]);
        return token;
    }

    async removeToken(refreshToken){
        await db.query(`DELETE FROM token WHERE refreshToken = $1`, [refreshToken]);
        const tokenData = await db.query("SELECT * FROM token");
        return tokenData.rows;
    }

    async validateAccessToken(token){
        try{
            return jwt.verify(token, JWT_access);
        }catch(e){
            return null;
        }
    }

    async validateRefreshToken(token){
        try {
            return jwt.verify(token, JWT_refresh);
        } catch (e) {
            return null;
        }
    }
}

module.exports = new TokenService();