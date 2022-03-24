//===========================
//Puerto
//===========================
process.env.PORT = process.env.PORT || 3000;
//===========================
//Entorno
//===========================
process.env.NODE_ENV = process.env.NODE_ENV || 'deV';
//===========================
//Base de datos
//===========================
let urlDB;
//if (process.env.NODE_ENV === 'dev') {
//  urlDB = 'mongodb://localhost:27017/cafe';
//} else {
urlDB = 'mongodb+srv://ricardobdcls:1a1s1d1f@cluster0.dkyyo.mongodb.net/test';
//}

process.env.URLDB = urlDB;