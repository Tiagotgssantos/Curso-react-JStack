//diferenças entre funções normais e Arrow function

//função
function minhaFunction(){}
//o this é diferente na function para Arrow function
/* Dentro de uma função normal, a palavra-chave "this" é 
definida dinamicamente quando a função é chamada e depende 
do contexto de execução. Já em uma arrow function, o "this" 
é capturado lexicalmente e mantém o valor do "this" do 
escopo em que a função é definida.

A diferença fundamental entre o "this" em uma função normal 
e em uma arrow function pode ser exemplificada da seguinte maneira:

const objeto = {
  nome: "Exemplo",
  funcaoNormal: function() {
    console.log("Função normal: Olá, " + this.nome + "!");
  },
  arrowFunction: () => {
    console.log("Arrow function: Olá, " + this.nome + "!");
  }
};

objeto.funcaoNormal(); // Saída: Função normal: Olá, Exemplo!
objeto.arrowFunction(); // Saída: Arrow function: Olá, undefined!

Na função normal funcaoNormal, o "this" está associado ao objeto objeto, 
pois a função é definida como um método nesse objeto. Portanto, 
o "this.nome" se refere ao valor da propriedade "nome" do objeto.

Por outro lado, na arrow function arrowFunction, o "this" é capturado 
lexicalmente do escopo em que a função é definida, que no exemplo 
acima é o escopo global (no navegador, seria o objeto "window"). 
Isso ocorre porque as arrow functions não têm um "this" próprio; 
elas herdam o "this" do escopo circundante. Portanto, o "this.nome" 
na arrow function se refere ao valor da propriedade "nome" do escopo 
global, que é undefined no exemplo dado.

Essa diferença de comportamento do "this" é importante ao usar funções 
em diferentes contextos. É comum usar arrow functions quando se deseja 
manter o valor do "this" do escopo pai ou quando não se precisa de uma 
referência dinâmica ao "this". Já as funções normais são mais adequadas 
quando o "this" precisa ser definido dinamicamente, como em métodos de 
objetos ou quando se usa "call", "apply" ou "bind" para definir 
explicitamente o valor de "this".

*/

//Arrow funtion
const minhaArrowFuntion = () =>{};
/*para nomear um arrow é necessario adicionar ela a uma 
const ou let ou var*/

/*função que ao ser execultada ela possa receber varios
argumentos varios parametros  */
function soma(){
   // console.log(arguments);
    console.log(Object.values(arguments));
    //criar um array com todos os valores da função

}

soma(1,2,3,4,5,6,7, 'Mateus');

//segundo exemplo:

function soma2(...argumentos){
/*Neste caso se eu fosse colocar todos os argumentos eu teria 
que colocar function soma2(argumentos, argumento2){
    console.log(argumentos, argumento2)
    o resultado seria 1 2
    teria que colocar mais para imprimir todos os números
    para imprimir todos basta colocar so 3 pontinhos antes do 
    parametro da função 
    ...argumentos
} */
    console.log(argumentos);
}
soma2(1,2,3,4,5,6,7, 'Mateus');

//terceiro exemplo:
function soma3(primeiroParametro, ...argumentos){
    /*Neste caso consigo colocar o o primeiro resultado 
    no primeiro parametro e os demais no segundo
    
    } */
        console.log(primeiroParametro);
        console.log(argumentos);
    }
    soma3(1,2,3,4,5,6,7, 'Mateus');


//quarto exemplo:
function soma4(primeiroParametro, ...argumentos){
    /*Neste caso consigo colocar o o primeiro resultado 
    no primeiro parametro e os demais no segundo
    
    } */
        console.log({primeiroParametro});
        //transformando em objeto
        console.log({argumentos});
    }
    soma4(1,2,3,4,5,6,7, 'Mateus');


/*quinto exemplo com Arrow function 
so conseguimos fazer com os ...parametro
o arguments visto assima vai funcionar da mesma forma que o this*/

const soma5 = (...argumentos) =>{
    console.log(argumentos);
}
soma5(1,2,3,4,5,6,7, 'Mateus');


//formas de usar arrow function

//primeiro exemplo:
const exemplo1 =()=>{
    console.log('Corpo da função');
}

exemplo1();

//segundo exemplo sintaxe reduzida

const exemplo2 = ()=>{
    return 'Hello world!';
}

console.log(exemplo2());

/*para fazer esse codigo de forma mais reduzida*/

const exemplo3 = () => 'Hello world!';
console.log(exemplo3());

//quarto exemplo simplificado o codigo 

const algumNumero = 10;
const exemplo4 = () =>(algumNumero >= 10 ? 'maior ou igual a 10' : 
'menor que 10');
console.log(exemplo4());
/*A função "exemplo4" utiliza um operador ternário para fazer uma verificação condicional. 
O operador ternário é uma forma concisa de escrever uma estrutura de "if-else".
A expressão condicional dentro do operador ternário é "algumNumero >= 10", 
o que verifica se o valor da constante "algumNumero" é maior ou igual a 10. 
Se essa condição for verdadeira, o valor retornado será a string 'maior ou igual a 10'. 
Caso contrário, ou seja, se a condição for falsa (o valor de "algumNumero" for menor que 10), 
o valor retornado será a string 'menor que 10'. */

//Quinto exemplo, retornando um objeto:

const getUser =()=>{
    return {
        id: '123',
        name: 'Mateus'
    };
}

console.log(getUser());

//para retorna sem o return basta envolver com parenteses
const getUser2 =()=>({
    id: '123',
    name: 'Matheus'
});

console.log(getUser2());

