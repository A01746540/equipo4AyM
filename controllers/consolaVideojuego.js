const path = require('path')
const ConsolaVideojuego = require('../utils/database').models.consolaVideojuego

/*exports.getAgregarConsolaVideojuego = (req,res)=>{
    res.send("Formulario")
}*/

exports.postAgregarConsolaVideojuego = (req, res) => {
    console.log(req.body) //<={idCV: number,lanzamiento:text}
    ConsolaVideojuego.create(req.body)
        .then(convj => {
            console.log("Registro Existoso")
            res.json({ estado: "aceptado" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "error" })
        })
        //res.redirect('/consolaVideojuegos/confirmacionDatos')
}

/*exports.getConfirmacionDatos = (req,res)=>{
    res.send("Confirmacion")
} */

exports.getObtenerConsolaVideojuegos = (req, res) => {
    ConsolaVideojuego.findAll()
        .then(consolaVideojuegos => {
            console.log(consolaVideojuegos)
            res.json(consolaVideojuegos)
        })
        .catch(err => console.log(err))
}

exports.postBorrarConsolaVideojuego = (req, res) => {
    console.log(req.body)
    ConsolaVideojuego.destroy({
            where: {
                idCV: req.body.idCV
            }
        })
        .then(() => {
            console.log("ConsolaVideojuego eliminado")
            res.json({ estado: "aceptado" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "error" })
        })
}

exports.postActualizarConsolaVideojuego = (req, res) => {
    console.log(req.body)
    ConsolaVideojuego.update({
            lanzamiento: req.body.lanzamiento
        }, {
            where: {
                idCV: req.body.idCV
            }
        })
        .then(() => {
            console.log("ConsolaVideojuego actualizado")
            res.json({ estado: "aceptado" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "error" })
        })
}