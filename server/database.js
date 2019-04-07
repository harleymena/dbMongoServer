const mongoose = require('mongoose');
const config = require('./config');

// Variables de nombre
const proyectName = config.proyectName();
const URI = 'mongodb://localhost/';

// Coneccion a db
mongoose.connect(URI + proyectName)
    .then(db => console.log('DB conect'))
    .catch(err => console.log(err));
module.exports = mongoose;