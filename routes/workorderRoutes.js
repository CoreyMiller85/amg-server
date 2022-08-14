const express = require('express');
const router = express.Router();
const { Workorder } = require('../db/db');

router.get('/', async (req, res) => {
  try {
    const results = await Workorder.findAll({});
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
