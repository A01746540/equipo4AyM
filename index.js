const express = require("express")
const app = express();

app.get("/prueba", (req, res) => {
    res.send("Prueba de servidor funcionando - Equipo 4 Alexis y Maxine")
})

app.listen(8084, () => {
    console.log("Servidor en linea por el puerto 8084")
})
