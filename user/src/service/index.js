const axios = require('axios');

module.exports = {
    list: async () => {
        const users = await axios.get('http://localhost:8004/User');
        return users.data;
    },
    insert: async (user) => {
        const newUser = await axios.post('http://localhost:8004/User', user);
        return newUser.data;
    },
    getById: async (id) => {
        const user = await axios.get(`http://localhost:8004/User/${id}`);
        return user.data;
    },
    update: async (id, user) => {
        const updateUser = await axios.put(`http://localhost:8004/User/${id}`, user);
        return updateUser.data;
    },
    delete: async (id) => {
        const deleteUser = await axios.delete(`http://localhost:8004/User/${id}`);
        return deleteUser.data;
    }
};
