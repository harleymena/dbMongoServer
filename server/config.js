// Configuracion del proyecto
const proyectName = 'mean-crud-employees'; // Nombre de la base de datos
const dbName = 'employees'; // Nombre de la base de datos
const uri = 'http://localhost:4242' // Ruta del navegador desde la que solicitara datos
const routes = './routes/employee.routes'; // Carpeta de rutas
const port = 3000;

module.exports = {
    proyectName: () => {
        return proyectName;
    },
    dbName: () => {
        return dbName;
    },
    uri: () => {
        return uri;

    },
    routes: () => {
        return routes;
    },
    port: () => {
        return port;
    }
}