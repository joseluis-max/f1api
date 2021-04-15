const express = require('express');
const server = express();
const morgan = require('morgan');

//nos permite ver por consola las peticiones http
server.use(morgan('dev')); //combined nos da mas informacion
server.use(express.urlencoded({extended: false}));
server.use(express.json());

server.set('port', process.env.PORT || 3000);
server.set('json spaces', 2);

server.use(require('./routes/drivers'));
server.use(require('./routes/constructors'));
server.use(require('./routes/circuits'));

server.listen(server.get('port'), ()=>{
  console.log(server.get('port'))
});