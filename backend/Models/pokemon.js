const mongoose = require ("mongoose")

const PokemonSchema = new mongoose.Schema({
  url_image: String,
  type: String,
  details: Array,
  number: Number,
  name: String
});

// Export model
module.exports = Pokemon = mongoose.model("pokemon", PokemonSchema)
