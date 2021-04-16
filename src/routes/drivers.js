const { Router } = require('express');
const router = Router();

let drivers = require('../../db/drivers.json');

router.get('/drivers',(req,res)=>{
  res.json(drivers)
});
router.post('/drivers', (req,res) => {
  drivers['Drivers'].push(req.body);
 res.json(drivers)
})
router.delete('/drivers/:id', (req,res) => {
  const{ id }= req.params;
  drivers['Drivers'].forEach( driver => {
    if(driver.driverId == id){
      drivers['Drivers'].splice(drivers['Drivers'].indexOf(driver), 1);
    }
  })
  res.json(drivers)
})
router.put('/drivers/:id',(req, res) => {
  const { id } = req.params;
  drivers['Drivers'].forEach(driver => {
   if( driver.driverId == id){
     for (const d in driver) {
       driver[d] = req.body[d];
     }
   }
  });
  res.json(drivers)
});

module.exports = router;