const allModels = require('../models');
const { response } = require('../utils');

module.exports = async(req, res ) => {
    const { model, id } = req.params;
    const item = req.body;

    const result = await allModels[model].update(id, item);
    response(res, 204, result);
}