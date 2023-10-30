const User = require('../service');
const bcrypt = require('bcrypt');
const { generateToken } = require('../middleware');

module.exports = async (req, res) => {
    const data = req.body;

    const user = await User.getByEmail(data.email);
    console.log('user :>> ', user.data);

    if (user) {
        if (bcrypt.compare(data.password, user.data[0].password)) {
            return res.status(200).json({
                message: 'Login Success',
                data: {
                    _id: user.data[0]._id,
                    first_name: user.data[0].first_name,
                    email: user.data[0].email,
                    token: generateToken(user)
                }
            });
        }
    }
};
