const {Dosen,MataKuliah,DosenMatkul} = require('../models')

const dosenMatkulController = {}

/*
    this is auto generate example, you can continue 

*/
dosenMatkulController.index = async(req,res) => {
    res.json({
        message : "Hello dosenMatkulController"
    })
}

dosenMatkulController.create = async (req,res) => {
    const {id_dosen,id_matkul} = req.body
    try {
        const getDosen = await Dosen.findOne({
            where : {
                id: id_dosen
            }
        })

        const getMatkul = await MataKuliah.findOne({
            where : {
                id: id_matkul
            }
        })
        if (getDosen === null || getMatkul === null) {
            return res.status(404).json({
                message: "Data Tidak Ditemukan"
            })

        } else {
            const createDsnMat = await DosenMatkul.create({
                id_dosen: getDosen.id,
                id_matkul: getMatkul.id
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

dosenMatkulController.getAll = async (req,res) => {
    const getDosenMatkul = await Dosen.findAll({
        include: [
            {
                model: MataKuliah
            }
        ]
    });
    res.json({
        data: getDosenMatkul
    })
}

dosenMatkulController.getById = async (req,res) => {
    const {id} = req.params
    const getDosenMatkul = await Dosen.findOne({
        include: [
            {
                model: MataKuliah
            }
        ],
        where : {
            id: id
        }
    });
    res.json({
        data: getDosenMatkul
    })
}

dosenMatkulController.update = async (req,res) => {
    const {id} = req.params
    const {id_dosen,id_matkul} = req.body
    try {
        const getDosen = await Dosen.findOne({
            where : {
                id: id_dosen
            }
        })

        const getMatkul = await MataKuliah.findOne({
            where : {
                id: id_matkul
            }
        })
        if (getDosen === null || getMatkul === null) {
            return res.status(500).json({
                message: error
            })

        } else {
            const createDsnMat = await DosenMatkul.update({
                id_dosen: getDosen.id,
                id_matkul: getMatkul.id
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

dosenMatkulController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const getDosenMatkul = await DosenMatkul.findOne({
            where : {
                id: id
            }
        })

        if (getDosenMatkul === null) {
            return res.status(500).json({
                message: "Data Tidak Ditemukan"
            })
        } else {
            const deleteDsnMat = await DosenMatkul.destroy({
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

module.exports = dosenMatkulController

