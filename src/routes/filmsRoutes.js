const express = require('express');
const Film = require('../models/filmsModel');
const router = express.Router();

router.post('/film', async(req, res) => {
    try {
        const film = new Film(req.body);
        await film.save();
        res.status(201).send(film);
    }catch (err){
        res.status(400).send(err);
    }
})

router.put('/:id', async (req, res) => {
    try {
        const film = await Film.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!film) {
            return res.status(404).json({ message: 'Filme não encontrado' });
          }
          res.status(200).send(film);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao atualizar o filme', error: err });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const film = await Film.findByIdAndDelete(req.params.id);
        if (!film) {
          return res.status(404).json({ message: 'Filme não encontrado' });
        }
        res.status(204).send(); 
      } catch (err) {
        res.status(500).json({ message: 'Erro ao deletar o filme', error: err });
      }
})

router.get('/films', async (req, res) => {
    try {
        const films = await Film.find();
        res.status(200).send(films);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;