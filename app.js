// Ici, nous créons notre application ExpressJs

// j'importe le framework Expressjs
const express = require('express');

// j'initialise une application express
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Middleware généraux
app.use((req,res,next) => {
    console.log("je suis un middleware dans le serveur");
    next();
});

// j'utilise un middleware 3 pour afficher le message dans la console
app.use((req,res,next) => {
    console.log("Bonjour, je suis le serveur!");
    next();
});

// j'ajoute un middleware qui gère la sécurité d'accès 
app.use((req,res,next) => {
    // je permet l'accès à mon API depuis n'importe quel origine
    res.setHeader('Access-Control-Allow-Origin', '*');
    // j'autorise certaines en-têtes dans les requête reçues dans notre API. les en-tête autorisées sont  'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    // j'autorise d'envoyer des requêtes avec les méthodes : 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

/* je dessine mes route avec Express
*avec la méthode get
route complète localhost:3200/api/fruit
*/
app.get('/api/fruit', (req,res,) => {
    console.log("je passe dans la route /api/fruit");
    // mon fruit
    const fruit= [
        {
            id: 1,
            nom: "pomme",
            description:"fruit saisonier riche en vitamine C",
            prix: 3
        },

        {
            id: 2,
            nom:"banane",
            description:"fruit disponible toutes les saisons riche en vitamine C",
            prix:2
        }
    ];

    // en terme de réponse, je renvoie le tableau de fruits
    res.status(200).json(fruit);
});

// Route POST pour créer un fruit
app.post('/api/fruit', (req, res) => {
    console.log("Je passe dans l'API /api/fruit");
    res.status(201).json({
        message: 'je suis dans post !'
    });
});

// Route PUT pour modifier un fruit
app.put('/api/fruit', (req, res) => {
    console.log("PUT /api/fruits reçu !");
    res.status(200).json({
        message: 'je suis dans put !'
    });
});

/*
j'exporte l'application express sous forme de module
ainsi, l'application app peut être importée dans
d'autres fichiers JS.
*/
module.exports = app;
