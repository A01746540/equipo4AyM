const express = require("express")
const conController = require('../controllers/Consolas')
const router = express.Router()


//Formulario de ingreso de datos (front-end) 
//router.get('/agregarConsola',conController.getAgregarConsola)
//Servicio para el procesamiento de los datos
router.post('/agregarConsola', conController.postAgregarConsola)
    //Pagina de confirmacion (front-end)
    //router.get('/confirmacionDatos',conController.getConfirmacionDatos)
    //Visualización de los datos guardados
router.get('/obtenerConsolas', conController.getObtenerConsolas)
router.post('/borrarConsola', conController.postBorrarConsola)
router.post('/actualizarConsola', conController.postActualizarConsola)


module.exports = router