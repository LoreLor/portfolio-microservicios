const { ClientError } = require('../utils');

module.exports = (req, res, next) => {
    const { model } = req.params;

    if(["Project", "Skill", "User"].includes(model)){
        return next();
    } else {
        throw new ClientError("Model not found!", 404);
    }

}