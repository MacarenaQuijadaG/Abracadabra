// rutas
// 1.- usuarios : http://localhost:3000/abracadabra/usuarios
// 2.- Voldemort :http://localhost:3000/abracadabra/conejo/:n
// 3.- usuario maria: http://localhost:3000/abracadabra/juego/Maria
// 4.- usuario no registrado http://localhost:3000/abracadabra/juego/Harry


const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Arreglo de nombres de usuarios
const usuarios = ['Juan', 'Jocelyn', 'Astrid', 'Maria', 'Ignacia', 'Javier', 'Brian'];

// Middleware para verificar si el usuario existe
app.use('/abracadabra/juego/:usuario', (req, res, next) => {
    const usuario = req.params.usuario;
    if (usuarios.includes(usuario)) {
        next(); 
    } else {
        //imagen si el usuario no existe
        res.sendFile(path.join(__dirname, 'assets', 'who.jpeg'));
    }
});

//  archivos estáticos 
app.use(express.static(path.join(__dirname, 'assets')));


//  arreglo de usuarios en formato JSON
app.get('/abracadabra/usuarios', (req, res) => {
    res.json({ usuarios });
});

//  si existe redirecciona al index
app.get('/abracadabra/juego/:usuario', (req, res) => {
   // res.send('¡Bienvenido al juego!');
    res.sendFile(__dirname + '/index.html');
});

//  mostrar la imagen del conejo o de Voldemort
app.get('/abracadabra/conejo/:n', (req, res) => {
    const numeroAleatorio = Math.floor(Math.random() * 4) + 1;
    // const n =parseInt(req.params);
    const n = parseInt(req.params.n);
    if (n === numeroAleatorio) {
        res.sendFile(path.join(__dirname, 'assets', 'conejito.jpg'));
    } else {
        res.sendFile(path.join(__dirname, 'assets', 'voldemort.jpg'));
    }
});


// Ruta genérica para manejar rutas no definidas
app.use((req, res) => {
    res.send('Esta página no existe...');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});