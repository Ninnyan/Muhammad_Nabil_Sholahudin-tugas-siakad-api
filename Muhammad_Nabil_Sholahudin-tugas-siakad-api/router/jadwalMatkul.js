const express = require("express");
const jadwalMatkulController = require("../controller/jadwalMatkulController");
const routeJadwalMatKul = express.Router()


routeJadwalMatKul.post('/',jadwalMatkulController.create)
routeJadwalMatKul.get('/get',jadwalMatkulController.getAll)
routeJadwalMatKul.get('/get/:id',jadwalMatkulController.getById)
routeJadwalMatKul.put('/update/:id',jadwalMatkulController.update)
routeJadwalMatKul.delete('/delete/:id',jadwalMatkulController.delete)

module.exports = routeJadwalMatKul