const Skills = require('../service');
const { response } = require('../utils');

module.exports = async (req, res) => {
    const { id } = req.params;

    const skill = await Skills.getById(id);
    response(res, 200, skill);
};
