// Ici, je code mon serveur

/* j'importe le package (module) http. Le module HTTP est stocké dans la variable http.
L'instruction requise () permet d'importer le module.
*/
const http = require('http');

// j'importe l'application express app.js
const app = require('./app');
// je déclare une variable avec le numero du port 
 const numport = 3200;
// je configure le numero du port utiliser dans le serveur 
app.set('port', numport);

//maintenant, je crée mon serveur en utilisant le package HTTP

const server = http.createServer(app);


 // je récupere la date 
 const date = new Date();
 let h = date.getUTCHours();

// Je précise l'adresse et le port du serveur
server.listen(numport, () => {
    console.log(`Le serveur tourne sur le port ${numport}`);
    console.log(date.toLocaleDateString());
    console.log(h.toLocaleString());
});