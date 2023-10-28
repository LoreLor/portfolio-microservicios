const axios = require('axios');

module.exports = {
    list: async () => {
        const skills = await axios.get('http://localhost:8004/Skill');
        return skills.data;
    },
    getById: async (id) => {
        const skills = await axios.get(`http://localhost:8004/Skill/${id}`);
        return skills.data;
    },
    insert: async (skill) => {
        const newSkill = await axios.post('http://localhost:8004/Skill', skill);
        return newSkill.data;
    },
    update: async (id, skill) => {
        const updateSkill = await axios.put(`http://localhost:8004/Skill/${id}`, skill);
        return updateSkill.data;
    },
    delete: async (id) => {
        const deleteSkill = await axios.delete(`http://localhost:8004/Skill/${id}`);
        return deleteSkill.data;
    }
};
