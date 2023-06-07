const http = require('http');

const users = require('./mocks/users');
//foi importado o aquivo users.js

const server = http.createServer((request, response) =>{
    console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

    if(request.url === '/users' && request.method === 'GET'){
        response.writeHead(200,{'Content-Type': 'application/json'});
        response.end(JSON.stringify(users));
       /*Dentro do end sempre temos que colocar uma string
       para isso teremos que converter o Array do arquivo
       users.js em string com o ,JSON.stringify()
       com a essa função JSON seguemos transforma 
       Arrays e objetos em strings no formato json */
    } else {
        //ao adicionar o else vai evitar qua a pagina iniciada 
        //não fique so parecendo que esta carregando
        response.writeHead(404,{'Content-Type' : 'text/html'});
        response.end(`Cannot ${request.method} ${request.url}`);
    }
    
});

server.listen(3000, () => console.log('Serve started at http://localhost:3000'));

/*Nesta aplicação não vamos trabalhar com banco de dados
então vamos criar uma pasta com no nome mocks ,
essa pasta é criado para lidar com dados fake */