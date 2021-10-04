const path = require('path')
const Consola = require('../utils/database').models.Consola

/*exports.getAgregarConsola = (req,res)=>{
    res.send("Formulario")
}*/

exports.postAgregarConsola = (req, res) => {
    console.log(req.body) //<={id: number,nombre:text}
    Consola.create(req.body)
        .then(vj => {
            console.log("Registro Existoso")
            res.json({ estado: "aceptado" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "error" })
        })
        //res.redirect('/Consolas/confirmacionDatos')
}

/*exports.getConfirmacionDatos = (req,res)=>{
    res.send("Confirmacion")
} */

exports.getObtenerConsolas = (req, res) => {
    Consola.findAll()
        .then(Consolas => {
            console.log(Consolas)
            res.json(Consolas)
        })
        .catch(err => console.log(err))
}

exports.postBorrarConsola = (req, res) => {
    console.log(req.body)
    Consola.destroy({
            where: {
                id: req.body.id
            }
        })
        .then(() => {
            console.log("Consola eliminado")
            res.json({ estado: "aceptado" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "error" })
        })
}

exports.postActualizarConsola = (req, res) => {
    console.log(req.body)
    Consola.update({
            nombre: req.body.nombre
        }, {
            where: {
                id: req.body.id
            }
        })
        .then(() => {
            console.log("Consola actualizado")
            res.json({ estado: "aceptado" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "error" })
        })
}