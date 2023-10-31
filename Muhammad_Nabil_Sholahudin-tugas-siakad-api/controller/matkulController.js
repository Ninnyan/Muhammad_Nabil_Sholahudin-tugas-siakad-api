const {MataKuliah} = require('../models')
const matkulController = {}

/*
    this is auto generate example, you can continue 

*/
matkulController.index = async(req,res) => {
    res.json({
        message : "Hello matkulController"
    })
}

matkulController.create = async (req,res) => {
    const {nama,kode_matkul,sks} = req.body 
    try {
        const createMatkul = await MataKuliah.create({
            nama : nama,
            kode_matkul : kode_matkul,
            sks : sks
        })
        res.status(201).json({
            message: "Data Berhasil Ditambahkan"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
        
    }
} 

matkulController.getAll = async (req,res) => {
    try {
        const getMatkul = await MataKuliah.findAll({
            order: [["createdAt","DESC"]]
        })
        return res.status(200).json({
            data : getMatkul
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
        
    }

}

matkulController.getById = async (req,res) => {
    const {id} = req.params
    try {
        const getDetailMatKul = await MataKuliah.findOne({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            data : getDetailMatKul
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })   
    }
}

matkulController.update = async (req,res) => {
    const {nama,kode_matkul,sks} = req.body 
    const id = req.params.id
    try {
        const getDetailMatKul = await MataKuliah.findOne({
            where : {
                id : id
            }
        })

        if (getDetailMatKul === null) {
            return res.status(500).json({
                message: "Data Tidak Ada"
            })
        }
        const updateMatkul = await MataKuliah.update({
            nama : nama,
            kode_matkul : kode_matkul,
            sks : sks
        },{
            where : {
                id : id
            }
        })
        res.status(200).json({
            message: "Data Berhasil Diubah"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })   
    }
} 

matkulController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const getMatkul = await MataKuliah.findOne({
            where : {
                id: id
            }
        })

        if (getMatkul === null) {
            return res.status(500).json({
                message: "Data Tidak Ditemukan"
            })
        } else {
            const deleteMatkul = await MataKuliah.destroy({
                where : {
                    id : id
                }
            })
            return res.status(200).json({
                message : "Data Berhasil Dihapus"
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error
        })   
    }
}


module.exports = matkulController

