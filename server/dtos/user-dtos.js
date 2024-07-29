module.exports = class UserDTO{
    email;
    isActivated;

    constructor(model){
        this.email = model.email;
        this.isActivated = model.isactivated;
    }
}