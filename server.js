const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const { readdirSync } = require('fs');
const app = express();

// Utilisation du format JSON pour les requêtes
app.use(express.json());
// Utilisation des CORS (sécurité)
app.use(cors());

// routes
readdirSync('./routes').map((route) => app.use('/', require('./routes/'+ route)));

// Database
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})
.then(() => console.log('Database connected'))
.catch((err) => console.log('connexion error', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`The application is live on port ${PORT}`);
});







//* Première méthode d'utilisation des routes
// import des routes
// const userRoutes = require('./routes/user');
// app.use('/', userRoutes)
//* Seconde méthode de définition des autorisations des CORS
// const allowed = ['http://localhost:3000', 'http://localhost:4000'];
// function options(req, res) {
//     let options;
//     let origin = req.header('origin');

//     if(allowed.indexOf(origin) > -1) {
//         options = {
//             origin: true,
//             optionSuccessStatus: 200
//         }
//     } else {
//         options = {
//             origin: false,
//         }
//     }
//     res(null, options);
// }
//* 1ère méthode de définition des autorisations des CORS
// const options = {
//     origin: 'http://localhost:3001',
//     useSuccessStatus: 200,
// };


