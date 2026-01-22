//Ici, nous créons notre application ExpressJs

// j'importe le framework Expressjs
const express = require('express');

//j'initialise une application express
const app = express();


app.use((req,res) => {
    res.end("Bonjour, je suis le serveur!");
});


/*
j'exporte l'application express sous forme de module
ainsi, l'application app peut être importée dans
d'autres fichiers JS.
*/
module.exports = app;