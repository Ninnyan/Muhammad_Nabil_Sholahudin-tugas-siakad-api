const {Mahasiswa} = require("../models")

const mahasiswaController = {}

/*
    this is auto generate example, you can continue 

*/
mahasiswaController.index = async(req,res) => {
    res.json({
        message : "Hello mahasiswaController"
    })
}

mahasiswaController.create = async (req,res) => {
    const {nama,nim,alamat} = req.body 
    try {
        const createMahasiswa = await Mahasiswa.create({
            nama : nama,
            nim : nim,
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

mahasiswaController.getAll = async (req,res) => {
    try {
        const getMahasiswa = await Mahasiswa.findAll({
            order: [["createdAt","DESC"]]
        })
        return res.status(200).json({
            data : getMahasiswa
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
        
    }

}

mahasiswaController.getById = async (req,res) => {
    const {id} = req.params
    try {
        const getDetailMhs = await Mahasiswa.findOne({
            where : {
                id : id
            }
        })
        return res.status(200).json({
            data : getDetailMhs
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })   
    }
}

mahasiswaController.update = async (req,res) => {
    const {nama,nim,alamat} = req.body 
    const id = req.params.id
    try {
        const getDetailMhs = await Mahasiswa.findOne({
            where : {
                id : id
            }
        })

        if (getDetailMhs === null) {
            return res.status(500).json({
                message: "Data Tidak Ada"
            })
        }
        const updateMahasiswa = await Mahasiswa.update({
            nama : nama,
            nim : nim,
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

mahasiswaController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const getMahasiswa = await Mahasiswa.findOne({
            where : {
                id: id
            }
        })

        if (getMahasiswa === null) {
            return res.status(500).json({
                message: "Data Tidak Ditemukan"
            })
        } else {
            const deleteMahasiswa = await Mahasiswa.destroy({
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

module.exports = mahasiswaController

