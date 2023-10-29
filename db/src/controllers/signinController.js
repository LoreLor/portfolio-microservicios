const allModels = require('../models');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { model } = req.params;
    const { email, password } = req.body;

    const user = await allModels[model].signin(email, password);
    response(res, 200, {email, password});
}