const { Router } = require('express');
// const getRandomQuote = require('../services/futuramaApi');
const futuramaQuote = require('../middleware/futuramaQuote');

const profiles = [];

module.exports = Router()
  .post('/api/v1/profiles', futuramaQuote, (req, res) => {
    const {
      name,
      favoriteCharacter,
    } = req.body;

    const profile = {
      name,
      favoriteCharacter,
      tagline: req.quote.quote
    };

    profiles.push(profile);
    res.send(profile);

  })

  .get('/api/v1/profiles', (req, res) => {
    res.send(profiles);
  })

  .get('/api/v1/profiles/:id', (req, res) => {
    res.send(profiles[req.params.id]);
  })

  .patch('/api/v1/profiles/:id', futuramaQuote, (req, res) => {
    const { favoriteCharacter } = req.body;

    const profile = {
      favoriteCharacter,
      tagline: req.quote.quote
    };
    profiles[req.params.id].favoriteCharacter = profile.favoriteCharacter;
    profiles[req.params.id].tagline = profile.tagline;
    res.send(profiles[req.params.id]);
  });
