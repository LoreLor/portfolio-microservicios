const Project = require('../service');
const { response } = require('../utils')

module.exports = async(req, res) => {
    const projects = await Project.list();
    response(res, 200, projects);
};