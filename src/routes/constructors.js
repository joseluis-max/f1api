const { Router } = require('express');
const router = Router();

const constructors = require('../../db/constructors.json');

router.get('/constructors', (req, res) => {
  res.json(constructors);
});
router.post('/constructors',(req,res) => {
  constructors['Constructors'].push(req.body);
  res.json(constructors);
});
router.delete('/constructors/:id', (req, res) => {
  const { id } = req.params;
  constructors['Constructors'].forEach( c => {
    if(c.constructorId == id){
      constructors['Constructors'].splice(constructors['Constructors'].indexOf(c), 1);
    }
  });
  res.json(constructors);
});
router.put('/constructors/:id', (req, res) => {
  const { id } = req.params;
  constructors['Constructors'].forEach(c => {
    if(c.constructorId == id ){
      for (const k in c) {
        c[k]=req.body[k];
      }
    }
  });
  res.json(constructors);
});
module.exports = router;