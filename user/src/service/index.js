const axios = require('axios');

module.exports = {
    list: async () => {
        const users = await axios.get('http://dbs:8004/User');
        return users.data;
    },
    insert: async (user) => {
        const newUser = await axios.post('http://dbs:8004/User', user);
        return newUser.data;
    },
    getById: async (id) => {
        const user = await axios.get(`http://dbs:8004/User/${id}`);
        return user.data;
    },

    getByEmail: async (email) => {
        const userEmail = await axios.get('http://dbs:8004/User', email);
        return userEmail.data;
    },

    update: async (id, user) => {
        const updateUser = await axios.put(`http://dbs:8004/User/${id}`, user);
        return updateUser.data;
    },
    delete: async (id) => {
        const deleteUser = await axios.delete(`http://dbs:8004/User/${id}`);
        return deleteUser.data;
    },

    signin: async (email, password) => {
        const sign = await axios.post('http://dbs:8004/User/signin', { email, password });
        return sign.data;
    }
};
