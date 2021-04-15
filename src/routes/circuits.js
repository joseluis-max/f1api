const { Router } = require('express');
const router = Router();

const circuits = require('../../db/circuits.json');

router.get('/circuits', (req, res) => {
  res.json(circuits);
})

module.exports = router;