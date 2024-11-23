const mongoose = require('mongoose');

const fimlsSchema = new mongoose.Schema({
    tittle: { type: String, required: true },
    description: { type: String, required: true },
    image_url: { type: String, required: true },
    trailer_url: {type: String, required: true}
});

const film = mongoose.model('Film', fimlsSchema);

module.exports = film;