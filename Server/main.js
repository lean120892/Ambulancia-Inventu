/*
const pinOut = require("./Gpio.js");
pinOut.IniciarGpio();

*/


/* ---Inicializacion de servidor---*/

const express = require('express')
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const port =  process.env.PORT ? process.env.PORT : 4000;

var path = require('path');



/*--- Salidas GPIO ---*/

app.post('/outs', (req, res)=>{
/*
  let pinName = req.body.name;
  let status = pinOut.PinWrite(pinName)
*/
 let status = 1

  res.send({state: status})
  
})
app.get('/outs')


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

