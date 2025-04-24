


const http = require('node:http');
const infoNueva = require('./data.js')
console.log(infoNueva.titulo);

const server = http.createServer((req, res) => {
    
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${infoNueva.titulo}</title>
    </head>
    <body style="font-family: sans-serif; padding: 2rem;">
    <h1>${infoNueva.titulo}</h1>
    <h2>${infoNueva.subtitulo}</h2>
    <p>${infoNueva.descripcion}</p>
    <h3>Origen</h3>
    <p>${infoNueva.origen}</p>
    <h3>Simbolismo</h3>
    <p>${infoNueva.simbolismo}</p>
    <h3>Curiosidades</h3>
    <ul>
    ${infoNueva.curiosidades.map(item => `<li>${item}</li>`).join('')}
    </ul>
    </body>
    </html>
    `;
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
});



const PORT = 3000    
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${server.address().port}`)
})

