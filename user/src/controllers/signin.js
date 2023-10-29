const User = require('../service');
const bcrypt = require('bcrypt');
const { generateToken } = require('../middleware');

module.exports = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.getByEmail(email);
    console.log('emailUserController', user.data[0].email);

    if (user) {
        if (bcrypt.compare(password, user.data[0].password)) {
            return res.status(200).json({
                message: 'Login Success',
                data: {
                    _id: user._id,
                    first_name: user.first_name,
                    email: user.email,
                    token: generateToken(user)
                }
            });
        }
    }
};
