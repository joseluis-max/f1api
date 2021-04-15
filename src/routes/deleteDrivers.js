const { Router } = require('express');
const router = Router();

const drivers = require('../../db/drivers.json');

router.delete('/drivers/:id', (req,res) => {
  const{ id }= req.params;
  drivers['Drivers'].forEach( driver => {
    if(driver.driverId == id){
      drivers['Drivers'].splice(drivers['Drivers'].indexOf(driver), 1);
    }
  })
  res.json(drivers)
})


module.exports = router;