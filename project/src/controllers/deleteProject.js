const Project = require('../server');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { id } = req.params;

    const result = await Project.delete(id);
    response(res, 200, result);
};
