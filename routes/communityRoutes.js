const express = require('express');
const router = express.Router();
const { Community } = require('../db/db');

router.get('/', async (req, res) => {
  try {
    const results = await Community.findAll({});
    res.json(results);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
