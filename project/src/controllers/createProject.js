const Project = require('../service');
const { response } = require('../utils');

module.exports = async(req, res) => {
    const  project =req.body;

    const newProject = await Project.insert(project);
    response(res, 201, newProject);
}