const mongoose = require('mongoose')
mongoose.connect('mongodb://user4:root@18.234.222.26:27017/base4?authSource=admin')
    .then(() => console.log("Conexión exitosa"))
    .catch(err => console.log(err))

const PokemonSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

const Pokemon = mongoose.model('Pokemon', PokemonSchema);

const pokemon = new Pokemon({
    nombre: "Newtwo",
    description: "El pokemon más poderoso",
    _id: new mongoose.Types.ObjectId()
})

pokemon.save()
    .then(() => {
        console.log(pokemon)
        console.log('Pokemon creado')
    })
    .catch(err => console.log(err))