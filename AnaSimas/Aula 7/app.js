// function atv1(){
//     const inputArray = document.getElementById('dobrarValor').value;
//     let arraySplit = inputArray.split(',');
//     let arrayDobrado = [];
//     console.log(arraySplit)
//     for(var i = 0; i < arraySplit.length; i++){
//         arrayDobrado[i] = arraySplit[i] * 2;
//     }
//     document.getElementById('resultadoAtv1').innerHTML = arrayDobrado;
//     document.getElementById('dobrarValor').value = '';
// }

// Dado um array de números, utilize a função map() para criar um novo array onde cada valor seja o dobro do valor correspondente do array original.

function atv1(){
    const inputArray1 = document.getElementById('dobrarValor').value;
    let arraySplit = inputArray1.split(',');
    let mapFunction = arraySplit.map(function(elemento){
        return elemento*2;
    });
    document.getElementById('resultadoAtv1').innerHTML = mapFunction;
    document.getElementById('dobrarValor').value = '';
}

//Dado um array de strings contendo nomes, utilize a função map() para criar um novo array onde cada nome esteja em maiúsculas.

function atv2(){
    const inputArray2 = document.getElementById('letraMaiuscula').value;
    let arraySplit = inputArray2.split(',');
    let mapFunction2 = arraySplit.map(function(elemento){
        return elemento.toUpperCase();
    });
    document.getElementById('resultadoAtv2').innerHTML = mapFunction2;
    document.getElementById('letraMaiuscula').value = '';
}

//Dado um array de objetos, utilize a função map() para criar um novo array contendo apenas uma propriedade específica de cada objeto.

class Objeto {
    constructor(nome,caracteristica){
        this.nome = nome;
        this.caracteristica = caracteristica;
    }
}

function atv3(){
    const nome1 = document.getElementById('propriedade1').value;
    const nome2 = document.getElementById('propriedade2').value;
    const nome3 = document.getElementById('propriedade3').value;

    const arrayNomes = [nome1, nome2, nome3];

    function editar(nome){
        const arrayCarac = ['Bonito(a)', 'Feio(a)', 'Legal', 'Chato(a)'];
        caracteristica = arrayCarac[Math.floor(Math.random() * arrayCarac.length)];
        let objeto = new Objeto(nome, caracteristica);
        let arrayObjetos = [];
        arrayObjetos.push(objeto);
    }

    let arrayObj = [];
    arrayObj = arrayNomes.forEach(editar);

    // let mapFunction3 = arrayObj.map(function(elemento){
    //     return elemento.caracteristica;
    // });

    document.getElementById('resultadoAtv3').innerHTML = mapFunction3;
    document.getElementById('propriedade1').value = '';
    document.getElementById('propriedade2').value = '';
    document.getElementById('propriedade3').value = '';
}

//Dado um array de números, utilize a função map() para criar um novo array onde cada valor seja a média dos valores anteriores, incluindo o valor atual.

//Dado um array de strings, utilize a função map() para criar um novo array onde cada string esteja sem espaços em branco.

//Simulação de uma requisição HTTP assíncrona.(promisses)

//Ler um arquivo assincronamente(promisses)