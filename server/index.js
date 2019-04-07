const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');

const config = require('./config');

// Variables para el proyecto
const dbName = config.dbName();
const uri = config.uri();
const routes = config.routes();
const port = config.port();

//Settings
//Obtiene el puerto asignado, de lo contrario usa el puerto 3000
app.set('port', process.env.PORT || port);

//Middlewares
app.use(morgan('dev')); //Muestra mensajes por consola
app.use(express.json()); //Configura servidor para uso de json
app.use(cors({ origin: `${uri}` }));

//Routes
app.use(`/api/${dbName}`, require(`${routes}`));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('BD: ' + dbName);
    console.log('Server port ', app.get('port'));
});