const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userController = require('./controller');
const User = require('./user');

//Conexión a mongo:
mongoose.connect('mongodb+srv://msilva:zcskCX6nUzoVLnOV@cluster0.e6mkjpp.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error al conectar con la BD: '));
db.once('open', ()=>{
    console.log('SE CONECTÓ... WIII');
});

//____________________________________________

//Configuración de Express con el middleware:
const app = express();

//Configuración del puerto:
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', ()=>{
    console.log(`Server en ejecución en el puerto ${PORT}`);
});

app.get('/', (req,res)=>{
    res.send('La marrana llegó a la pocilga.')
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CRUD:
app.get('/users/all', userController.getUsers);
app.post('/users/create', userController.createUser);
app.get('/users/find/:dni', userController.getUserByDNI);
app.put('/users/update/:dni', userController.updateUser);
app.delete('/users/delete/:dni', userController.deleteUser);

