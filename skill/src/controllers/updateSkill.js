const Skills = require('../service');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { id } = req.params;
    const skill = req.body;

    const newSkill = await Skills.update(id, skill);
    response(res, 200, newSkill);
};
