function printGreetings(messege){
    console.log(messege);
}

printGreetings('Seja muito bem vindo(a)');
/*
printGreetings();
Ele vai dar undefined por que eu não passei nenhum valor. 
adicionando valor:
printGreetings('Seja muito bem vindo(a)'); */

function printGreetings2(messege = 'Mensagem padrão'){
    /*Dessa forma se o usuario não passar na essa sera 
    a mensagem padrão ='Mensagem padrão' */
    console.log(messege);
}

printGreetings2();

/*Os "parâmetros default" em JavaScript referem-se a valores predefinidos 
que podem ser atribuídos a parâmetros de função, caso nenhum valor seja 
fornecido ou se o valor fornecido for undefined. Esses valores padrão 
permitem que uma função seja chamada com menos argumentos do que o número 
total de parâmetros definidos e, ao mesmo tempo, evita erros de referência indefinida.

A sintaxe para definir um parâmetro default é fornecer um valor 
após o nome do parâmetro na declaração da função. */