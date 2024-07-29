const userService = require("../service/user-service");

class UserController {
    
    async registrition(req, res, next){
        try {
            const {email, password} = req.body;
            const newUser = await userService.registration(email, password);
            res.cookie('refreshToken', newUser.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(newUser);
        } catch (error) {
            
        }
    }

    async login(req, res, next){
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            
        }
    }

    async logout(req, res, next){
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (error) {
            
        }
    }

    async activate(req, res, next){
        try {
            const activationLink = req.params.link;
            await userService.activation(activationLink);
            return res.redirect("http://localhost:3000/");
        } catch (error) {
            
        }
    }
    
    async refresh(req, res, next){
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            
        }
    }
}

module.exports = new UserController();