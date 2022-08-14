const express = require('express');
const router = express.Router();
const { Unit } = require('../db/db');

router.get('/', async (req, res) => {
  try {
    const results = await unit.findAll({});
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
