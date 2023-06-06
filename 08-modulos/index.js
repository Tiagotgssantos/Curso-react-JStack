//const printName = require('./printName');
//const modulo = require('./printName');
//outro exemplo:
const {printName,lastName}=require('./printName');

console.log('hello word');
/*no terminal integrado podemos execultar 
esse codigo digitando apenas node mais o nome do
arquivo com extensão:
node index.js ou apans node index */

/*Módulos: são conjuntos de códigos.

3 tipos de módulos:
→ Todos os arquivos javascript são modulos;
→ Nativos
→ npm (node package Manager);
*/

/*Para utilizar o arquivo printName.js para o arquivo 
index.js utilizamos a função require() ela importa todos os tipos de 
modulos 
cria uma const adiciona um nome e salva o caminho:
const printName = require('./printName');
ja no arquivo que sera importado printNmae.js 
informa o que sera acessivel em outros modulos:
module.exports = printName;*/

//printName('Matheus');
//modulo.printName(`Mateus ${modulo.lastName}`);
printName(`Mateus ${lastName}`);

/* E para importa modulos nativos
basta colocar a 
const os = require('os');
console.log(os.type())*/
