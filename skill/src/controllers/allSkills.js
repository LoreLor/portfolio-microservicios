const Skills = require('../service');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const skills = await Skills.list();
    response(res, 200, skills);
};
