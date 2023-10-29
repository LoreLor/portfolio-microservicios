const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    first_name: {
        type: String,
        require: true,
    },
    last_name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
});

userSchema.statics.list = async function () {
    return await this.find();
};

userSchema.statics.getById = async function (id) {
    return await this.findById(id);
};

userSchema.statics.insert = async function (user) {
    return await this.create(user);
};

userSchema.statics.update = async function (id, user) {
    return await this.findByIdAndUpdate(id, user);
};

userSchema.statics.delete = async function (id) {
    return await this.findByIdAndRemove(id);
};

userSchema.statics.signin = async function (email, password) {
    const user = await this.findOne({ email: email });

    if (!user) {
        // si email no existe
        return null;
    }

    // Comprueba la contraseña con bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
        // Inicio de sesión exitoso, retorna el usuario.
        return user;
    }

    // La contraseña no es válida.
    return null;
};

module.exports = userSchema;
