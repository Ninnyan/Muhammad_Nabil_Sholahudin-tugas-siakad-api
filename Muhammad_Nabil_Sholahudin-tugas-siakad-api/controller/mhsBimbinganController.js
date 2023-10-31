const{Dosen,Mahasiswa,mahasiswaBimbingan} = require("../models")

const mhsBimbinganController = {}

/*
    this is auto generate example, you can continue 

*/
mhsBimbinganController.index = async(req,res) => {
    res.json({
        message : "Hello mhsBimbinganController"
    })
}

mhsBimbinganController.create = async (req,res) => {
    const {id_dosen,id_mahasiswa} = req.body
    try {
        const getDosen = await Dosen.findOne({
            where : {
                id: id_dosen
            }
        })

        const getMahasiswa = await Mahasiswa.findOne({
            where : {
                id: id_mahasiswa
            }
        })
        if (getDosen === null || getMahasiswa === null) {
            return res.status(404).json({
                message: "Data Tidak Ditemukan"
            })

        } else {
            const createMhsBimbingan = await mahasiswaBimbingan.create({
                id_dosen: getDosen.id,
                id_mahasiswa: getMahasiswa.id
            })

            res.status(201).json({
                message: "Data Berhasil Ditambahkan"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
    
}

mhsBimbinganController.getAll = async (req,res) => {
    const getMhsBimbingan = await Dosen.findAll({
        include: [
            {model: Mahasiswa}
        ],
        attributes: ['id','nidn','nama','alamat']
    });
    res.json({
        data: getMhsBimbingan
    })
}

mhsBimbinganController.getById = async (req,res) => {
    const {id} = req.params
    const getMhsBimbingan = await Dosen.findOne({
        include: [
            {
                model: Mahasiswa
            }
        ],
        where : {
            id: id
        }
    });
    res.json({
        data: getMhsBimbingan
    })
}

mhsBimbinganController.update = async (req,res) => {
    const {id} = req.params
    const {id_dosen,id_mahasiswa} = req.body
    try {
        const getDosen = await Dosen.findOne({
            where : {
                id: id_dosen
            }
        })

        const getMahasiswa = await Mahasiswa.findOne({
            where : {
                id: id_mahasiswa
            }
        })
        if (getDosen === null || getMahasiswa === null) {
            return res.status(500).json({
                message: "Data Tidak Ditemukan"
            })

        } else {
            const updateMhsBimbingan = await mahasiswaBimbingan.update({
                id_dosen: getDosen.id,
                id_mahasiswa: getMahasiswa.id
            },
            {
                where: {
                    id: id
                }
            })

            res.status(201).json({
                message: "Data Berhasil Diubah"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
    
}

mhsBimbinganController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const getMhsBimbingan = await mahasiswaBimbingan.findOne({
            where : {
                id: id
            }
        })

        if (getMhsBimbingan === null) {
            return res.status(500).json({
                message: "Data Tidak Ditemukan"
            })
        } else {
            const deleteMhsBimbingan = await mahasiswaBimbingan.destroy({
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

module.exports = mhsBimbinganController

