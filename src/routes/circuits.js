const { Router } = require('express');
const router = Router();

const circuits = require('../../db/circuits.json');

router.get('/circuits', (req, res) => {
  res.json(circuits);
});
router.post('/circuits', (req,res) => {
  circuits['Circuits'].push(req.body);
  res.json(circuits);
});
router.delete('/circuits/:id', (req,res) => {
  let c = circuits['Circuits'];
  c.forEach(circuit => {
    if(circuit.circuitId == req.params.id){
      c.splice(c.indexOf(circuit), 1);
    }
  })
  res.json(c);
})
router.put('/circuits/:id', (req,res) => {
  const { id } = req.params;
  circuits['Circuits'].forEach(circuit => {
   if( circuit.circuitId == id){
     for (const c in circuit) {
       circuit[c] = req.body[c];
     }
   }
  });
  res.json(circuits)
})

module.exports = router;