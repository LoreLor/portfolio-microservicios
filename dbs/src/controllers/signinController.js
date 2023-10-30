const allModels = require('../models');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { model } = req.params;
    const data = req.body;

    const user = await allModels[model].signin(data.email, data.password);
    response(res, 200, data);
}