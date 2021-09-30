const express = require("express")
const app = express();

app.get("/prueba", (req, res) => {
    res.send("Prueba de servidor funcionando")
})

app.listen(8080, () => {
    console.log("Servidr en linea por el puerto 8080")
})