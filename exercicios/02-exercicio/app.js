

const http = require('http');
const fs = require('fs');

const server = http.createServer(
    (request, response) => {

        let arquivo = '';

        if (request.url === '/') {
            arquivo = 'index.html';
        } else if (request.url === '/hobbies') {
            arquivo = 'hobbies.html'
        } else if (request.url === '/contato') {
            arquivo = 'contato.html'
        } else {
            arquivo = 'erro.html'
        }

        if (fs.existsSync(arquivo)) {
            fs.readFile(arquivo, 
                (erro, dados) => {
                    if (erro) {
                        throw erro;
                    } else {
                        response.writeHead(200 /*status sucesso*/, {'Content-Type': 'text/html'});
                        response.end(dados);
                    }
                }
            );    
        } else {
            response.writeHead(500, {'Content-Type': 'text/html'});
            response.write(`Arquivo ${arquivo} não localizado...`);
            response.end();
        }
    }
);

server.listen(3000, ()=> {console.log("Servidor está rodando, escutando a porta 3000")});
