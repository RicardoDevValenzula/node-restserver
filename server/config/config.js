//===========================
//Puerto
//===========================
process.env.PORT = process.env.PORT || 3000;
//===========================
//Entorno
//===========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//===========================
//Vencimiento del Token
//===========================
//60 segundos
//60 minutos
//24 horas
//30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
//===========================
//Seed
//===========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarollo';

//===========================
//Base de datos
//===========================
let urlDB;
if (process.env.NODE_ENV === 'dev') {   
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;
//===========================
//Google ID Token
//===========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '34404195643-hdtmtpdlm0o6l168j6h4iadq366o19pl.apps.googleusercontent.com';