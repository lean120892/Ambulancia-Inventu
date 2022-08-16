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

  if(req.body.status == true){
    console.log("Encender Led")
    //writeGpio(req.body.status)
    //console.log(req.body.status)
  }
  if(req.body.status == false){
    console.log("Apagar Led")
    //writeGpio(req.body.status)
    console.log(req.body.status)
  }

  res.send("led ok")
})
app.get('/outs')


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
