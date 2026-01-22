// Ici, je code mon serveur

/* j'importe le package (module) http. Le module HTTP est stocké dans la variable http.
L'instruction requise () permet d'importer le module.
*/
const http = require('http');

//maintenant, je crée mon serveur en utilisant le package HTTP
const server = http.createServer((req, res) => {
    res.end("Bonjour je suis le serveur!");
});


// Je précise l'adresse et le port du serveur
server.listen(3000);