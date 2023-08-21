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

var arrayObj = [];
function editar(nome){
    const arrayCarac = ['Bonito(a)', 'Feio(a)', 'Legal', 'Chato(a)'];
    caracteristica = arrayCarac[Math.floor(Math.random() * arrayCarac.length)];
    let objeto = new Objeto(nome, caracteristica);
    arrayObj.push(objeto);
}

function atv3(){
    const nome1 = document.getElementById('propriedade1').value;
    const nome2 = document.getElementById('propriedade2').value;
    const nome3 = document.getElementById('propriedade3').value;

    const arrayNomes = [nome1, nome2, nome3];
    arrayNomes.forEach(editar);

    let mapFunction3 = arrayObj.map(function(elemento){
        return elemento.caracteristica;
    });

    document.getElementById('resultadoAtv3').innerHTML = mapFunction3;
    document.getElementById('propriedade1').value = '';
    document.getElementById('propriedade2').value = '';
    document.getElementById('propriedade3').value = '';
}

//Dado um array de números, utilize a função map() para criar um novo array onde cada valor seja a média dos valores anteriores, incluindo o valor atual.

// 1,2,3,4,5,6

function atv4(){
    const valores = document.getElementById('valor1').value;
    const arrayNumeros = valores.split(',');

    let mapAtividade4 = arrayNumeros.map((numero, index, arrayNumeros) => {
        let valor = arrayNumeros.slice(0,index+1);
        let soma = valor.reduce((acumuladora, numero) => acumuladora + numero);
        return soma/ (index+1);
    });

    document.getElementById('resultadoAtv4').innerHTML = mapAtividade4;
}

//Dado um array de strings, utilize a função map() para criar um novo array onde cada string esteja sem espaços em branco.

function atv5(){
    const arrayOriginal = document.getElementById('valor1_atv5').value;
    const arraySeparado = arrayOriginal.split(',');

    const arrayEditado = arraySeparado.map((string) => {
        return string.trim();
    });

    document.getElementById('resultadoAtv5').innerHTML = arrayEditado;
}

//Simulação de uma requisição HTTP assíncrona.(promisses)

function atv6(){
    fetch("exemplo de http", {
        method: "GET",
        header: {
            "Content-type": "application/json",
        },
        body: {
            data: "test"
        }
    })
    .then((resposta) => console.log(resposta))
    .catch((erro) => console.log(erro));
}

//Ler um arquivo assincronamente(promisses)