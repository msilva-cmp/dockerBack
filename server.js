const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error al conectar con la BD: '));
db.once('open', ()=>{
    console.log('SE CONECTÓ... WIII');
});

app.get('/', (req,res)=>{
    res.send('La marrana llegó a la pocilga.')
});

app.listen(PORT, ()=>{
    console.log(`Server en ejecución en el puerto ${PORT}`);
});

