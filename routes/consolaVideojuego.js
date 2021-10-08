const express = require("express")
const convjController = require('../controllers/consolaVideojuego')
const router = express.Router()


//Formulario de ingreso de datos (front-end) 
//router.get('/agregarConsolaVideojuego',conController.getAgregarConsolaVideojuego)
//Servicio para el procesamiento de los datos
router.post('/agregarConsolaVideojuego', conController.postAgregarConsolaVideojuego)
    //Pagina de confirmacion (front-end)
    //router.get('/confirmacionDatos',conController.getConfirmacionDatos)
    //Visualización de los datos guardados
router.get('/obtenerConsolaVideojuegos', conController.getObtenerConsolaVideojuegos)
router.post('/borrarConsolaVideojuego', conController.postBorrarConsolaVideojuego)
router.post('/actualizarConsolaVideojuego', conController.postActualizarConsolaVideojuego)


module.exports = router