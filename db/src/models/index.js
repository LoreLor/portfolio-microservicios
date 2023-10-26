// conexion a la base de datos
const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/envs');

// creo la conexion a través de mongoose 
const conn = mongoose.createConnection(MONGO_URI);

// me creo las entidades o modelos
const Project = conn.model("Project", require('./schemas/projectSchema'));

module.exports = {
    Project,
}