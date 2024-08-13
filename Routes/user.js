// routes/user.js
const express = require('express');
const router = express.Router();
const { User } = require('../models/User');

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

router.put('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  await user.update(req.body);
  res.json(user);
});

router.delete('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  await user.destroy();
  res.json({ message: 'User deleted' });
});

module.exports = router;
