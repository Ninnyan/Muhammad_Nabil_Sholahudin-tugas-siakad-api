const express = require("express");
const dosenMatkulController = require("../controller/dosenMatkulController");
const routeDosenMatkul = express.Router()


routeDosenMatkul.post('/',dosenMatkulController.create)
routeDosenMatkul.get('/get',dosenMatkulController.getAll)
routeDosenMatkul.get('/get/:id',dosenMatkulController.getById)
routeDosenMatkul.put('/update/:id',dosenMatkulController.update)
routeDosenMatkul.delete('/delete/:id',dosenMatkulController.delete)

module.exports = routeDosenMatkul


