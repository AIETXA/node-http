


const http = require('node:http');
const infoNueva = require('./data.js')
console.log(infoNueva.titulo);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="UTF-8">
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
      `);
    });
    
server.listen(0, () => {
    console.log(`server listening on port ${server.address().port}`)
})

