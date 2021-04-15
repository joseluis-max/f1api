const { Router } = require('express');
const router = Router();

const constructors = require('../../db/constructors.json');

router.get('/constructors', (req, res) => {
  res.json(constructors);
})

module.exports = router;