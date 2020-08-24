const router = require("express").Router();
const data = require("../helpers/excellReaderMahasiswa");
const { Mahasiswa, MataKuliah, Nilai } = require("../models");
const XLSX = require("xlsx");
const sequelize = require("sequelize");
        // ID Mahasiswa, Nama, Nama Mata Kuliah, Nilai


router.get("/", (req, res) => {
    Nilai.findAll({
        include: [{ model: Mahasiswa, required: false }, { model: MataKuliah, required: true }]
    })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.get("/average", (req, res) => {
    Nilai.findAll({
        attributes: [[sequelize.fn('sum', sequelize.col('Nilai')), 'total']],
        include : [
        {
            model : Nilai,
        }
        ],
        group : ['Nilai.id'],
        raw: true,
        order: sequelize.literal('total DESC')
    })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err);
        })
})

router.post("/", (req, res) => {
    Nilai.post({
        ID_Mahasiswa: req.body.ID_Mahasiswa,
        ID_MataKuliah: req.body.ID_MataKuliah,
        Nilai: req.body.Nilai,
    })
        .then(newValue => {
            res.status(201).json(newValue)
        })
        .catch(err => {
            res.status(401).json(err)
        })

})

router.put("/", (req, res) => {
    const workbook = XLSX.readFile(req.body);
    const sheet_name_list = workbook.SheetNames;
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    Mahasiswa.create(data)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    let deletedNilai;
    Nilai.findByPk(id)
        .then(resultNilai => {
            if (resultNilai) {
                deletedNilai = resultNilai;
                Nilai.destroy({
                    where: {
                        id
                    }
                })
                .then(_ => {
                    res.status(200).json(deletedNilai);
                })
                .catch(err => {
                    res.status(400).json(err)
                })

            } else {
                res.status(404).json({
                    msg: "Value Not Found"
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;