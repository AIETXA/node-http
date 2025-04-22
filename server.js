
//Importar el Módulo de Datos:
//Configurar el servidor para responder con un documento HTML. 
// Puedes utilizar el método `res.end()` para escribir dentro tu HTML 
// (con su !DOCTYPE, H1, H2... lo que creas que es necesario)
// con la datos de `data.js`
//Iniciar el Servidor:


const http = require('node:http');
const server = http.createServer((req, res) => {
    console.log('reques recived');
});
server.listen(0, () => {
    console.log(`server listening on port ${server.address().port}`)
})