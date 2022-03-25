//===========================
//VerificarToken
//===========================

const jwt = require('jsonwebtoken');

let verificarToken = (req, resp, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return resp.status(401).json({
                ok: false,
                err: {
                    message: 'Invalid Token'
                }
            })
        }

        req.usuario = decoded.usuario;
        next();
    })

};

let verificaRol = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        res.json({
            ok: false,
            error: {
                message: 'El usuario no es administrador'
            }
        });
    }



}

module.exports = {
    verificarToken,
    verificaRol
}