//Ici, nous créons notre application ExpressJs

// j'importe le framework Expressjs
const express = require('express');

//j'initialise une application express
const app = express();

// je définis la route par défault par exmple: localhost:3000


app.use((req,res,next) => {
    console.log("je suis un middleware dans le serveur");
    next();
});

app.use((req,res) => {
    res.json({message: "Vous êtes bien sur le serveur Ndovoo"});
    
    
});


// j'utilise un middleware 3 pour afficher le message dans la console
app.use((req,res) => {
    res.console("Bonjour, je suis le serveur!");
    
});

/*
j'exporte l'application express sous forme de module
ainsi, l'application app peut être importée dans
d'autres fichiers JS.
*/
module.exports = app;