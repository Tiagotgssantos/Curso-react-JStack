const http = require('http');
//importa o modulo http

const server =http.createServer((request,response)=>{
    //request = requisição
    //response = resposta
    //criando o servidor
    response.writeHead(200, {'Content-Type': 'text/html' });
    response.end('<h1>Hello world!</h1>');
});

server.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));

/*Request (Requisição):
O objeto request representa a requisição recebida pelo servidor. 
Ele contém informações enviadas pelo cliente, como o método HTTP 
utilizado, os headers (cabeçalhos) da requisição e os dados opcionais 
enviados no corpo da requisição. */

/*Response (Resposta):
O objeto response é usado para enviar uma resposta ao cliente 
que fez a requisição. Ele permite definir o código de status 
da resposta, os cabeçalhos da resposta e enviar o corpo da resposta */

/*Para execultar o servidor digitar no terminal o node mais o 
caminho dele:
 node src/index.js 
ele vai gerar o um link que podera ser clicado e o servidor 
podera ser aberto no navegador.
Em caso de atualização no codigo, para o servidor atualizar ele tem que ser parado
com os comandos Ctrl+c em seguida inicializado com o node src/index.js
novamente.
*/

//explicando o codigo por completo:

/*const http = require('http');

Nesta linha, importamos o módulo http do Node.js, que fornece funcionalidades 
para criar servidores HTTP.*/

/*const server = http.createServer((request, response) => {
  // Cria o servidor e passa uma função de callback que será chamada para cada requisição
  response.writeHead(200, {'Content-Type': 'text/html' });
  response.end('<h1>Hello world!</h1>');
});

Aqui, criamos um servidor chamando a função createServer() do módulo http. 
Passamos uma função de callback como argumento, que será chamada para cada 
requisição recebida pelo servidor.

Dentro da função de callback, usamos response.writeHead() para definir o 
código de status da resposta HTTP como 200 (OK) e o cabeçalho Content-Type como text/html. 
Isso indica que a resposta será um documento HTML.

Em seguida, usamos response.end() para enviar a resposta de volta ao cliente. 
Neste caso, estamos enviando a resposta com o conteúdo <h1>Hello world!</h1>.
*/

/*server.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));

Por fim, chamamos o método listen() no objeto server para fazer o servidor começar 
a escutar as requisições. Passamos o número da porta (3000) em que o servidor irá escutar. 
Também passamos uma função de callback que será chamada quando o servidor estiver pronto 
para receber conexões.

Dentro da função de callback, usamos console.log() para exibir uma mensagem indicando 
que o servidor foi iniciado e a URL em que ele está rodando.

Com essas linhas de código, você terá um servidor HTTP básico em execução na porta 3000. 
Ele irá tratar as requisições e enviar a resposta "Hello world!" em formato 
HTML para cada requisição recebida.
*/

