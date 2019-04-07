const express = require('express');
const router = express.Router();
const config = require('../config');

const dbName = config.dbName();

// Controlador de metodos
const employee = require(`../controllers/${dbName}.controller`);

// Work with employees
router.get('/', employee.getEmployees);
router.post('/', employee.createEmployee);
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.editEmployee);
router.delete('/:id', employee.deleteEmployee);

module.exports = router;