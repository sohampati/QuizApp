// routes/result.js
const express = require('express');
const router = express.Router();
const { Result } = require('../models/Results');

router.get('/', async (req, res) => {
  const results = await Result.findAll();
  res.json(results);
});

router.post('/', async (req, res) => {
  const results = await Result.create(req.body);
  res.json(results);
});

router.get('/:id', async (req, res) => {
  const results = await Result.findByPk(req.params.id);
  res.json(results);
});

router.put('/:id', async (req, res) => {
  const results = await Result.findByPk(req.params.id);
  await results.update(req.body);
  res.json(results);
});

router.delete('/:id', async (req, res) => {
  const results = await Result.findByPk(req.params.id);
  await results.destroy();
  res.json({ message: 'results deleted' });
});

module.exports = router;
