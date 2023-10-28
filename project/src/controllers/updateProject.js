const Project = require('../service');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { id } = req.params;
    const project = req.body;

    const updatedProject = await Project.update(id, project);
    response(res, 200, updatedProject);
};
