const express = require('express');
const router = express.Router();
const { Workorder, Unit } = require('../db/db');

router.get('/', async (req, res) => {
  try {
    const results = await Workorder.findAll({});
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

router.post('/create', async (req, res) => {
  try {
    const response = await Workorder.create(req.body);
    res.json(req.body);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
