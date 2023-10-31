const {MataKuliah,jadwalMatkul} = require("../models")

const jadwalMatkulController = {}

/*
    this is auto generate example, you can continue 

*/
jadwalMatkulController.index = async(req,res) => {
    res.json({
        message : "Hello jadwalMatkulController"
    })
}

jadwalMatkulController.create = async (req,res) => {
    const {id_matkul,hari,jam} = req.body
    try {
        const getMatkul = await MataKuliah.findOne({
            where : {
                id: id_matkul
            }
        })
        if (getMatkul === null) {
            return res.status(404).json({
                message: "Data Tidak Ditemukan"
            })

        } else {
            const createJadMatKul = await jadwalMatkul.create({
                id_matkul: getMatkul.id,
                hari: hari,
                jam: jam
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

jadwalMatkulController.getAll = async (req,res) => {
    const getJadwalMatkul = await jadwalMatkul.findAll({
        include: [
            {
                model: MataKuliah
            }
        ]
    });
    res.json({
        data: getJadwalMatkul
    })
}

jadwalMatkulController.getById = async (req,res) => {
    const {id} = req.params
    const getDosenMatkul = await jadwalMatkul.findOne({
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

jadwalMatkulController.update = async (req,res) => {
    const {id} = req.params
    const {id_matkul,hari,jam} = req.body
    try {
    
        const getMatkul = await MataKuliah.findOne({
            where : {
                id: id_matkul
            }
        })
        if (getMatkul === null) {
            return res.status(404).json({
                message: "Data Tidak Ditemukan"
            })

        } else {
            const updateJwdMatkul = await jadwalMatkul.update({
                id_matkul: getMatkul.id,
                hari: hari,
                jam: jam
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

jadwalMatkulController.delete = async (req,res) => {
    const {id} = req.params
    try {
        const getJadwalMatkul = await jadwalMatkul.findOne({
            where : {
                id: id
            }
        })

        if (getJadwalMatkul === null) {
            return res.status(500).json({
                message: "Data Tidak Ditemukan"
            })
        } else {
            const deleteJadwalMatkul = await jadwalMatkul.destroy({
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


module.exports = jadwalMatkulController

