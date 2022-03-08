// Aquí tenemos el express, el cors y la database

const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db.js');

// Este es el puerto donde levantaremos el servidor

const PORT = process.env.PORT || 5000;

// Este es el router desde donde iremos a los distintos endpoints

const router = require('./router');

// ESTO ES EL CORS Y SU CONFIGURACIÓN

let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Middleware
app.use(express.json()); //PUEDO OBTENER JSON DEL BODY
app.use(cors(corsOptions));  //USO CORS


app.use(router);


db.then(()=>{
    app.listen(PORT, ()=> console.log(`Server on port ${PORT}`)); //Conectado a la base de datos
})
.catch((err)=> console.log(err.message));