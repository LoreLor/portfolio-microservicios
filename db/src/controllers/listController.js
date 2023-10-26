const { response } = require("../utils");

const allModels = require('../models');


module.exports = async(req, res) => {
    const { model } = req.params;

    const result = await allModels[model].list();
    response(res, 200, result);
}