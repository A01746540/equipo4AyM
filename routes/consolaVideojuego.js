const express = require("express")
const convjController = require('../controllers/consolaVideojuego')
const router = express.Router()


//Formulario de ingreso de datos (front-end) 
//router.get('/agregarConsolaVideojuego',convjController.getAgregarConsolaVideojuego)
//Servicio para el procesamiento de los datos
router.post('/agregarConsolaVideojuego', convjController.postAgregarConsolaVideojuego)
    //Pagina de confirmacion (front-end)
    //router.get('/confirmacionDatos',convjController.getConfirmacionDatos)
    //Visualización de los datos guardados
router.get('/obtenerConsolaVideojuegos', convjController.getObtenerConsolaVideojuegos)
router.post('/borrarConsolaVideojuego', convjController.postBorrarConsolaVideojuego)
router.post('/actualizarConsolaVideojuego', convjController.postActualizarConsolaVideojuego)


module.exports = router