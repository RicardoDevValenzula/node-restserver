require('./config/config')
const express = require('express');
const app = express();
const path = require('path');

//Config Global de rutas
app.use(require('./routes/index'))

const mongoose = require('mongoose');

//habilitar public
app.use(express.static(path.resolve(__dirname, '../public')));

mongoose.connect(process.env.URLDB, (err, resp) => {
    if (err) throw err

    console.log('Base de datos Online');
})

app.listen(process.env.PORT, () => {
    console.log(
        'Escuchando el puerto: ', process.env.PORT
    );
});