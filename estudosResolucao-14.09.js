// 1
function calcularValores(num1, num2) {
  console.log(`SOMA: ${num1 + num2}`);
  console.log(`SUBTRAÇÃO: ${num1 - num2}`);
  console.log(`MULTIPLICAÇÃO: ${num1 * num2}`);
  console.log(`DIVISÃO: ${num1 / num2}`);
}
// calcularValores(1, 2);

// 2
function diferenciaTriangulo(lado1, lado2, lado3) {
  if (lado1 == lado2 == lado3) {
    return console.log('O triangulo é equilátero');
  }
  if (((lado1 == lado2) && (lado1 != lado3)) || ((lado1 != lado2) && (lado1 == lado3)) || ((lado3 == lado2) && (lado3 != lado1))) {
    return console.log('O triangulo é isosceles');
  } else {
    return console.log('O triangulo é escaleno');
  }
}
// diferenciaTriangulo(1, 1, 1);
// diferenciaTriangulo(1, 1, 2);
// diferenciaTriangulo(1, 2, 3);

// 3
function pow(num, expo) {
  return console.log(num ** expo);
}
// pow(3, 2);

// 4
function divs(divd, divs) {
  let resultado = divd / divs;
  let resto = divd % divs;

  return console.log(`TOTAL: ${resultado} || RESTO: ${resto}`);
}
// divs(2, 2);

// 5
const num = 0.1 + 0.6;
function arrumaNumero(num) {
  let ajusteCasasDecimais = num.toFixed(2);
  let numeroArrumado = ajusteCasasDecimais.toString().replace('.', ',');
  return console.log(`R$ ${numeroArrumado}`);
}
// arrumaNumero(num);

// 6
// JUROS SIMPLES
function jurosSimples(CI, TJ, TA) {
  let jurosSimples = CI * TJ * TA;
  jurosSimples.toFixed(2);
  jurosSimples.toString().replace('.', ',');
  return console.log(`Juros Simples: ${jurosSimples}`)
}
// jurosSimples(1000, 0.2, 10);

// JUROS COMPOSTO
function jurosComposto(CI, TJ, TA) {
  let montante = CI * (1 + TJ) ** TA;
  montante.toFixed(2);
  let jurosComposto = montante - CI;
  jurosComposto.toFixed(2);
  jurosComposto.toString().replace('.', ',');
  return console.log(`Juros Composto: ${jurosComposto}`)
}
// jurosComposto(1, 0.2, 100);

// 7
function delta(a, b, c) {
  let delta = b ** 2 - 4 * (a * c);
  let arr = [];

  let raiz = Math.sqrt(delta);

  console.log(raiz);

  if (!Math.sqrt(delta)) {
    return console.log('Delta Negativo');
  } else {
    x1 = ((-1 * (b)) + Math.sqrt(delta)) / (2 * a);
    console.log(`X1: ${x1}`);
    arr.push(x1);
    x2 = ((-1 * (b)) - Math.sqrt(delta)) / (2 * a);
    console.log(`X2: ${x2}`);
    arr.push(x2);
    return console.log(arr);
  }
}
// delta(3, -15, 12);

// 8
const listaJogos = [55, 101, 100, 100, 12, 55, 60, 32, 0.5, 102, 103]

function analisaJogos(listaJogos) {
  let lista = [];
  let maiorElemento = listaJogos[0];
  let recordVezes = 0;

  for (let i = 1; i <= listaJogos.length; i++) {

    if (listaJogos[i] > maiorElemento) {
      maiorElemento = listaJogos[i];
      recordVezes++;
      console.log(maiorElemento);
    } else {
      continue;
    }
  }

  lista.push(recordVezes);

  const piorJogo = Math.min(...listaJogos);
  const piorJogoPosicao = listaJogos.indexOf(piorJogo)

  lista.push(piorJogoPosicao);

  return console.log(lista);
}
// analisaJogos(listaJogos);

// 9
function calcularNota(nota) {
  let base = nota;

  if (nota < 38) {
    return console.log('REPROVADO(A)');
  }

  if (nota >= 38) {
    let resto = base % 5;
    while (resto > 0) {
      base++;
      resto = base % 5;
    }

    if ((base - nota) >= 3) {
      return console.log(`APROVADO(A) - ${nota}`);
    } else {
      nota = base;
      return console.log(`APROVADO(A) - ${nota}`);
    }
  }
}
// calcularNota(43);

// 10
function calculaInteiro(num) {
  if ((num % 3) == 0) {
    return console.log('É divisivel por 3');
  } else {
    return console.log('Não é divisivel por 3');
  }
}
// calculaInteiro(0);

// 11
function bissexto(ano) {

  if ((ano % 4) == 0) {
    return console.log('O ano é bissexto');
  } else {
    return console.log('O ano não é bissexto');
  }
}
// bissexto(800);

// 12
function fatorial(num) {
  let val = 1;

  while (num > 0) {
    val *= num;
    num--;
  }
  console.log(val);
}
// fatorial(10);

// 13
function diaDaSemana(dia) {
  switch (dia) {
    case 1:
      console.log('Domingo - Fim de Semana');
      break;
    case 2:
      console.log('Segunda-feira - Dia Útil');
      break;
    case 3:
      console.log('Terça-feira - Dia Útil');
      break;
    case 4:
      console.log('Quarta-feira - Dia Útil');
      break;
    case 5:
      console.log('Quinta-feira - Dia Útil');
      break;
    case 6:
      console.log('Sexta-feira - Dia Útil');
      break;
    case 7:
      console.log('Sábado - Fim de Semana');
      break;
    default:
      console.log('Inválido');
  }
}
// diaDaSemana(3);

// 14
function comprarFruta(fruta) {
  switch (fruta) {
    case 'maçã':
      console.log('Não vendemos essa fruta');
      break;
    case 'kiwi':
      console.log('Estamos com escassez de kiwi');
      break;
    case 'melancia':
      console.log('Temos em estoque: R$ 3,00 o quilo');
      break;
    default:
      console.log('Digite uma opção válida');
  }
}
// comprarFruta('melancia');

// 15
function comprarCarro(carro) {
  switch (carro) {
    case 'hatch':
      console.log('Compra efetuada com sucesso');
      break;
    case 'sedan':
      console.log('Tem certeza que não prefere este modelo?');
      break;
    case 'motocicletas':
      console.log('Tem certeza que não prefere este modelo?');
      break;
    case 'caminhonetes':
      console.log('Tem certeza que não prefere este modelo?');
      break;
    default:
      console.log('Não trabalhamos com este tipo de automóvel aqui');
  }
}
// comprarCarro('sedan');

// 16
function calculadora(num1, num2, op) {
  switch (op) {
    case '+':
      console.log(num1 + num2);
      break;
    case '-':
      console.log(num1 - num2);
      break;
    case '*':
      console.log(num1 * num2);
      break;
    case '/':
      console.log(num1 / num2);
      break;
    default:
      console.log('Digite uma oração válida');
  }
}
// calculadora(1, 1, '*');

// 17
function calcularAumento(plano, salario) {
  switch (plano) {
    case 'A':
      aumento = salario * 0.1
      console.log('VALOR FINAL: ' + parseInt(salario + aumento))
      break;
    case 'B':
      aumento = salario * 0.15
      console.log('VALOR FINAL: ' + parseInt(salario + aumento))
      break;
    case 'C':
      aumento = salario * 0.2
      console.log('VALOR FINAL: ' + parseInt(salario + aumento))
      break;
    default: console.log('Digite um plano válido');
  }
}
// calcularAumento('A', 1000);

// 18
function escreverExtenso(num) {
  switch (num) {
    case 0:
      console.log('Zero');
      break;
    case 1:
      console.log('Um');
      break;
    case 2:
      console.log('Dois');
      break;
    case 3:
      console.log('Três');
      break;
    case 4:
      console.log('Quatro');
      break;
    case 5:
      console.log('Cinco');
      break;
    case 6:
      console.log('Seis');
      break;
    case 7:
      console.log('Sete');
      break;
    case 8:
      console.log('Oito');
      break;
    case 9:
      console.log('Nove');
      break;
    case 10:
      console.log('Dez');
      break;
    default: console.log('Número fora do intervalo');
  }
}
// escreverExtenso(0);

// 19


// 20
function divideValor(val) {

  let count100 = 0;
  let count50 = 0;
  let count10 = 0;
  let count5 = 0;
  let count1 = 0;

  console.log(`VALOR DE ENTRADA: ${val}`)

  while (val != 0) {
    if (val >= 100) {
      val -= 100;
      count100++;
    }
    if (val >= 50) {
      val -= 50;
      count50++;
    }
    if (val >= 10) {
      val -= 10;
      count10++;
    }
    if (val >= 5) {
      val -= 5;
      count5++;
    }
    if (val >= 1) {
      val -= 1;
      count1++;
    }
  }
  console.log(`
    ${count100} notas de R$ 100,00
    ${count50} notas de R$ 50,00
    ${count10} notas de R$ 10,00
    ${count5} notas de R$ 5,00
    ${count1} notas de R$ 1,00
    VALOR: ${val}
    `)
}
// divideValor(532753);

// 21
function planoDeSaude(idade) {
  const valPlano = 100;

  if (idade < 10) {
    let valor = valPlano + 80;
    return console.log(`O valor do plano é R$ ${valor}`);
  } else if (idade >= 10 && idade < 30) {
    let valor = valPlano + 50
    return console.log(`O valor do plano é R$ ${valor}`);
  } else if (idade >= 30 && idade < 60) {
    let valor = valPlano + 90
    return console.log(`O valor do plano é R$ ${valor}`);
  } else if (idade >= 60) {
    let valor = valPlano + 130
    return console.log(`O valor do plano é R$ ${valor}`);
  }
}
// planoDeSaude(60);

// 22
function calcularAnuidade(mesEscolhido, anuidade) {

  let taxaJuros = 0.05;
  let valorFinal = [0];

  for (let mes = 1; mes <= 13; mes++) {
    valorMensal = anuidade * (1 + taxaJuros) ** mes;
    valorFinal.push(valorMensal);
  }

  const nomeMes = (mesEscolhido) => {

    let nomeMes = '';
    switch (mesEscolhido) {
      case 1:
        nomeMes = "Janeiro";
        break;
      case 2:
        nomeMes = "Fevereiro";
        break;
      case 3:
        nomeMes = "Março";
        break;
      case 4:
        nomeMes = "Abril";
        break;
      case 5:
        nomeMes = "Maio";
        break;
      case 6:
        nomeMes = "Junho";
        break;
      case 7:
        nomeMes = "Julho";
        break;
      case 8:
        nomeMes = "Agosto";
        break;
      case 9:
        nomeMes = "Setembro";
        break;
      case 10:
        nomeMes = "Outubro";
        break;
      case 11:
        nomeMes = "Novembro";
        break;
      case 12:
        nomeMes = "Dezembro";
        break;
      default:
        console.log('Informe um dia válido');
    }

    return nomeMes;
  }

  return console.log(`O mês escolhido foi: ${nomeMes(mesEscolhido)} e o valor da anuidade esse mês foi de ${parseFloat(valorFinal[mesEscolhido]).toFixed(2)}`);

}

// calcularAnuidade(12, 2000);

// 23
const criaAluno = (codigo, nota1, nota2, nota3) => {
  return {
    codigo,
    nota1,
    nota2,
    nota3
  }
}

function calculaMediaPonderada(Object) {

  let peso1 = Object.nota1;
  let peso2 = Object.nota2;
  let peso3 = Object.nota3;

  if (Object) {
    if ((peso1 >= peso2) && (peso1 >= peso3)) {
      mediaPonderada = (Object.nota1 * 4 + Object.nota2 * 3 + Object.nota3 * 3) / (1 + 2 + 3);
    } else if ((peso2 >= peso1) && (peso2 >= peso3)) {
      mediaPonderada = (Object.nota1 * 3 + Object.nota2 * 4 + Object.nota3 * 3) / (1 + 2 + 3);
    } else {
      mediaPonderada = (Object.nota1 * 3 + Object.nota2 * 3 + Object.nota3 * 4) / (1 + 2 + 3);
    }

    if (mediaPonderada >= 5) {
      return console.log(`APROVADO, Média Ponderada: ${mediaPonderada.toFixed(2)}`);
    } else {
      return console.log('Reprovado');
    }
  } else {
    console.log('Objeto inválido');
  }
}

// const aluno1 = criaAluno(100, 3.0, 2.0, 2.0);

// calculaMediaPonderada(aluno1);

// 24
function repeatHello() {
  let i = 1;

  while (i <= 11) {
    console.log(`${i} - Hello World`);
    i++
  }
}

// repeatHello();

// 25
function repeatAte50() {
  let i = 1;

  while (i <= 50) {
    console.log(`${i}`);
    i++
  }
}

// repeatAte50()

// 26
function calculaPares() {
  let i = 1;

  while (i <= 100) {

    if (i % 2 == 0) console.log(`${i}`);

    i++;
  }
}

// calculaPares();

// 27
function calculaCrescimento(altura1, altura2, taxa1, taxa2) {
  let tempo = 0;
  let alturaFinal1 = altura1;
  let alturaFinal2 = altura2;

  if (altura1 == altura2) {
    console.log('As alturas são iguais');
  }

  if (altura1 > altura2) {

    while (alturaFinal1 >= alturaFinal2) {
      alturaFinal1 = alturaFinal1 + taxa1;
      alturaFinal2 = alturaFinal2 + taxa2;
      console.log(alturaFinal1, alturaFinal2, '----');
      tempo++;
    };
    console.log(`ANO: ${tempo}`);
  } else {
    while (alturaFinal2 >= alturaFinal1) {
      alturaFinal1 = alturaFinal1 + taxa1;
      alturaFinal2 = alturaFinal2 + taxa2;
      tempo++;
    };
    console.log(`${tempo} anos`);
  }

}

// calculaCrescimento(130, 90, 2, 3);

// 28
const arrNum = [1, 2, 3, 4, 5, 6, 7, 9, 7, 8, 4];
let countPares = 0;
let countImpares = 0;

function calculaPareseImpares(array) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      countPares++;
    } else {
      countImpares++;
    }
  }
  console.log(`
    Pares: ${countPares}
    Impares: ${countImpares}
  `)
}

// calculaPareseImpares(arrNum);

// 29
const arrRange = [1, 2, 3, 4, 5, 6, 67, 87, 10, 53, 5, 6, 645, 20, 425];
let countRange = 0;
let countOutRange = 0;
function calculaRange(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      if (arr[i] <= 20) {
        countRange++
      } else {
        countOutRange++;
      }
    } else {
      countOutRange++;
    }
  }

  console.log(`
  Dentro do intervalo: ${countRange}
  Fora do intervalo: ${countOutRange}
  `)
}

// calculaRange(arrRange);

// 30
const arrMaxMin = [1, 2, 3, 4, 5, 6, 67, 87, 10, 53, 5, 6, 645, 20, 425];
function calculaMaxMin(arr) {
  let maximo = Math.max(...arr);
  let minimo = Math.min(...arr);

  console.log(`
    MAXIMO: ${maximo}
    MINIMO: ${minimo}
  `)
}

// calculaMaxMin(arrMaxMin);

// 31
const arrNegativos = [1, 2, 3, 4, 5, 6, -7, 8, 9, 9, 9, 8, 9, 7, 4, 5, -6, 6, 5, -1, -2, 3, 5, 4, -4, 5, 2, -1, 4, 5, 4, 1, 2];
let countTotalNegativos = 0;
function countNegativos(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      countTotalNegativos++;
    }
  }

  console.log(`Quantidade de Negativos: ${countTotalNegativos}`);
}

// countNegativos(arrNegativos);

// 32
const mediaAritmetca = [1, 2, 3, 4, 5, 6, -7, 8, 9, 9, 9, 8, 9, 7, 4, 5, -6, 6, 5, -1, -2, 3, 5, 4, -4, 5, 2, -1, 4, 5, 4, 1, 2];
let divisor = 0;
let media = 0;

function calculaMediaAritmetica(arr) {
  for (let i = 0; i < arr.length; i++) {
    divisor += arr[i];
  }
  media = divisor / arr.length;

  console.log(`A média é: ${media.toFixed(2)}`);
}

// calculaMediaAritmetica(mediaAritmetca);

// 33
const arrInt = [1, 2, 3, 4, 5];
const arrString = ['nome1', 'nome2', 'nome3', 'nome4', 'nome5'];
const arrFloat = [1.23, 2.38, 3, 4.12, 5.80];
let arrayResultado = [];

function concatArrays(arr1, arr2, arr3) {
  arrayResultado = arr1.concat(arr2)
  arrayResultado = arrayResultado.concat(arrFloat);

  console.log(arrayResultado);
}

// concatArrays(arrInt, arrString, arrFloat);

// 34
const string1 = 'Teste de funcao';
const string2 = 'Teste de Lista';

function comparaStrings(str1, str2) {
  if (str1.includes(str2)) {
    return true;
  } else if (str2.includes(str1)) {
    return true;
  } else {
    return false;
  }
}

// console.log(comparaStrings(string1, string2));

// 35
let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

let newVetor = [];

newVetor = vetorPilha.concat(vetorAdiciona);

// console.log(newVetor);

// 36
const arrPrimario = [1, 2, 8, 4, 4, 435, 42, 8, 6, 4, 8, 7, 26, 9648, 75];
const arrSimples = [1, 2, 3, 7, 5, 6];

function multiplicaArr(arr, num) {

  let arrResult = arr.map(x => x * num);

  return console.log(arrResult);
}

function multiplicaArrIfMore5(arr, num) {

  let arrResult = arr.map(x => {
    if (x > 5) {
      return x * num;
    } else {
      return x;
    }
  });

  return console.log(arrResult);
}

// multiplicaArrIfMore5(arrSimples, 2);
// multiplicaArr(arrPrimario, 2);

// 37

function calculaPA(a1, n, r) {
  const TermoGeral = a1 + (n - 1) * r;
  let somaPA = ((a1 * TermoGeral) * n) / 2;
  return console.log(`
  Termos: ${n}
  Soma: ${somaPA}
  `)
}

function somaPG(a1, n, q) {
  let resultado = a1 * (q ** (n - 1)) / (q - 1);
  return console.log(`
  Termos: ${n}
  Soma: ${resultado}
  `);
}

// console.log(somaPG(10, 5, 2));


// 38
let resultado = 0;

function startEnd(inicio = 0, fim = 100) {

  if (inicio < fim) {

    resultado = fim - inicio;

    for (resultado; resultado > inicio; resultado--) {
      if ((resultado % 2) != 0) {
        console.log(resultado);
      }
    }
  } else {
    resultado = inicio - fim;
    for (resultado; resultado > fim; resultado--) {
      if ((resultado % 2) != 0) {
        console.log(resultado);
      }
    }
  }
}
// startEnd();

// 39
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 4, 3, 2, 1];
function changeValues(arr1, arr2) {
  [arr1, arr2] = [arr2, arr1];

  console.log(arr1);
  console.log(arr2);
}
// console.log(arr1);
// console.log(arr2);
// console.log('------------------');
// changeValues(arr1, arr2);

// 40
const arrNotas = [1, 2, 10, 3, 8, 9, 7, 6, 5]

function verificaNotas(arrNotas) {

  for (let i = 0; i < arrNotas.length; i++) {
    if (arrNotas[i] > 0 && arrNotas[i] < 4.9) {
      console.log('D');
    } else if (arrNotas[i] >= 5.0 && arrNotas[i] < 6.9) {
      console.log('C');
    } else if (arrNotas[i] >= 7.0 && arrNotas[i] < 8.9) {
      console.log('B');
    } else {
      console.log('A');
    }
  }
}

// verificaNotas(arrNotas);
