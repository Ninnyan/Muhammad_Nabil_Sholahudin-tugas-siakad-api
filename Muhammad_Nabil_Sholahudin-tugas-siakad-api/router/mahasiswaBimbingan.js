const express = require("express");
const mhsBimbinganController = require("../controller/mhsBimbinganController");
const routeMhsBimbingan = express.Router()


routeMhsBimbingan.post('/',mhsBimbinganController.create)
routeMhsBimbingan.get('/get',mhsBimbinganController.getAll)
routeMhsBimbingan.get('/get/:id',mhsBimbinganController.getById)
routeMhsBimbingan.put('/update/:id',mhsBimbinganController.update)
routeMhsBimbingan.delete('/delete/:id',mhsBimbinganController.delete)

module.exports = routeMhsBimbingan


