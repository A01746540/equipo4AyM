const path = require('path')
const Videojuego = require('../utils/database').models.videojuego

exports.getAgregarVideojuego = (req, res) => {
    res.send("Formulario")
}

exports.postAgregarVideojuego = (req, res) => {
    console.log(req.body);
    Videojuego.create(req.body)
        .then(res => {
            console.log("Registro Exitoso")
            res.json({ estado: "aceptado" })
        })
        .catch(err => {
            console.log(err)
            res.json({ estado: "error" })
        })
    res.redirect('/videojuegos/confirmacionDatos')
}

exports.getConfirmacionDatos = (req, res) => {
    res.send("Confirmacion")
}

exports.getMostrarVideojuegos = (req, res) => {
    res.send("Videojuegos")
}