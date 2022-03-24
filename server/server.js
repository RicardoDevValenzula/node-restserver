require('./config/config')
const express = require('express');
const app = express();

app.use(require('./routes/usuario'))

const mongoose = require('mongoose');

mongoose.connect(process.env.URLDB, (err, resp) => {
    if (err) throw err

    console.log('Base de datos Online');
})

app.listen(process.env.PORT, () => {
    console.log(
        'Escuchando el puerto: ', process.env.PORT
    );
});