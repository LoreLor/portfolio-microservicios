const Skills = require('../service');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const skill = req.body;

    const newSkill = await Skills.insert(skill);
    response(res, 201, newSkill);
};
