const {Dosen} = require('../models')

const dosenController = {}

/*
    this is auto generate example, you can continue 

*/
dosenController.index = async(req,res) => {
    res.json({
        message : "Hello dosenController"
    })
}

dosenController.create = async (req,res) => {
    const {nama,nidn,alamat} = req.body 
    try {
        const createDosen = await Dosen.create({
            nama : nama,
            nidn : nidn,
            alamat : alamat
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

dosenController.getAll = async (req,res) => {
    try {
        const getDosen = await Dosen.findAll({
            order: [["createdAt","DESC"]],
            
        })
        return res.status(200).json({
            data : getDosen
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
        
    }

}

dosenController.getById = async (req,res) => {
    const {id} = req.params
    try {
        const getDetailDsn = await Dosen.findOne({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            data : getDetailDsn
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })   
    }
}

dosenController.update = async (req,res) => {
    const {nama,nidn,alamat} = req.body 
    const id = req.params.id
    try {
        const getDetailDsn = await Dosen.findOne({
            where : {
                id : id
            }
        })

        if (getDetailDsn === null) {
            return res.status(404).json({
                message: "Data Tidak Ada"
            })
        }
        const updateDosen = await Dosen.update({
            nama : nama,
            nidn : nidn,
            alamat : alamat
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

dosenController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const getDosen = await Dosen.findOne({
            where : {
                id: id
            }
        })

        if (getDosen === null) {
            return res.status(500).json({
                message: "Data Tidak Ditemukan"
            })
        } else {
            const deleteDosen = await Dosen.destroy({
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

module.exports = dosenController

