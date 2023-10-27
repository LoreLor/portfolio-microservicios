const Project = require('../service');
const { response } = require('../utils');

module.exports = async(req, res) => {
    const { id } = req.params;

    const projectById = await Project.getById(id);
    response(res, 200, projectById);
}