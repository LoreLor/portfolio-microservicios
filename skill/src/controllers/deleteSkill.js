const Skills = require('../service');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { id } = req.params;

    const deletedSkill = await Skills.delete(id);
    response(res, 200, deletedSkill);
};
