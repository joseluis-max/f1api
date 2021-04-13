const { Router } = require('express');
const router = Router();

const drivers = require('../../db/drivers.json');
router.get('/drivers',(req,res)=>{
  res.json(drivers)
});

module.exports = router;