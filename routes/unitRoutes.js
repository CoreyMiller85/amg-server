const express = require('express');
const router = express.Router();
const { Unit, Community, Workorder } = require('../db/db');

router.get('/', async (req, res) => {
  try {
    const results = await Unit.findAll({ include: [Community, Workorder] });
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

router.post('/create', async (req, res) => {
  try {
    const response = await Unit.create(req.body);
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const unit = await Unit.destroy({ where: { id: req.params.id } });
    res.json(unit);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
