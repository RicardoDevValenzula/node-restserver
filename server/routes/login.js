const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const res = require('express/lib/response');
const app = express();

app.post('/login', (req, resp) => {
    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, u) => {
        if (err) {
            return resp.status(500).json({
                ok: false,
                err
            });
        }

        if (!u) {
            return resp.status(400).json({
                ok: false,
                err: {
                    message: 'Invalid (email) or password'
                }
            });
        }


        if (!bcrypt.compareSync(body.password, u.password)) {
            return resp.status(400).json({
                ok: false,
                err: {
                    message: 'Invalid email or (password)'
                }
            });
        }

        let token = jwt.sign({
            usuario: u
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

        resp.json({
            ok: true,
            usuario: u,
            token
        });
    });
});

module.exports = app;