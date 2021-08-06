//Parametros de função

//function soma(num1, num2) {
//    return num1 + num2;
//}

//function somaOutroNumero () {
//    return 50 + 25
//}

//console.log(soma(2, 2));
//console.log(soma(4, 2));
//console.log(soma(-500, 2)); //ordem dos parâmetros 

// parâmetros x argumentos 

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`
}

//console.log(nomeIdade("Marcus", 36));

function soma(numero1, numero2) {
    return numero1 + numero2;
}


function multiplica(numero1 = 1 , numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)))