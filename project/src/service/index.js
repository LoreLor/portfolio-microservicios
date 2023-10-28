const axios = require('axios');

module.exports = {
    list: async () => {
        const projects = await axios.get('http://localhost:8004/Project');
        return projects.data;
    },
    getById: async (id) => {
        const projectById = await axios.get(`http://localhost:8004/Project/${id}`);
        return projectById.data;
    },
    insert: async (project) => {
        const newProject = await axios.post('http://localhost:8004/Project', project);
        return newProject.data;
    },
    update: async (id, project) => {
        const newProject = await axios.put(`http://localhost:8004/Project/${id}`, project);
        return newProject.data;
    },
    delete: async (id) => {
        const deletedProject = await axios.delete(`http://localhost:8004/Project/${id}`);
        return deletedProject.data;
    }

};
