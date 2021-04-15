const { Router } = require('express');
const router = Router();

const drivers = require('../../db/drivers.json');

router.post('/drivers', (req,res) => {
   drivers['Drivers'].push(req.body);
  res.json(drivers)
})


module.exports = router;