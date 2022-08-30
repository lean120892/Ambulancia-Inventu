
const pinOut = require("./Gpio.js");
pinOut.IniciarGpio();

const Pwm = require("./Pwm.js");

/* ---Inicializacion de servidor---*/

const express = require('express')
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const port =  process.env.PORT ? process.env.PORT : 4000;

var path = require('path');
const { pwmOut } = require('./pwm');



/*--- Salidas GPIO ---*/

app.post('/outs', (req, res)=>{

  let pinName = req.body.name;
  let status = pinOut.PinWrite(pinName)
  res.send({state: status})
  
})

/*--- Salidas PWM ---*/
app.post('/pwm', (req, res)=>{
  let pinName = req.body.name;
  let value = req.body.value;
  Pwm.pwmOut(pinName,value);
    
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

