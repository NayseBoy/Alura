// parâmetros de funções

//1     //2


//console.log(soma(2, 2));
//console.log(soma(20, 600));
//console.log(soma(50, 50));

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade("Kaique", 17))

function multiplica(numero1 = 1, numero2 = 6){
    return numero1 * numero2;
}

function soma(num1, num2) {
    return num1 + num2;
}
                            //9
console.log(multiplica(soma(4, 5)));



