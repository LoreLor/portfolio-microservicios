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

userSchema.statics.getByEmail = async function (email) {
    return await this.findOne({
        where: {email: email}
    })
};

userSchema.statics.signin = async function (data) {
    const user = await this.findOne({
        where: {
            email: data.email
        }
    });
    if (!user) {
        // El usuario no existe
        return false;
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
        // La contraseña es válida, puedes autenticar al usuario
        return user;
    } else {
        // La contraseña no es válida
        return false;
    }
}
    

module.exports = userSchema;
