let pessoa = require("./modelos/pessoa.js");
let produto = require("./modelos/produto.js");
let calculos = require('./modelos/calcular.js');
let valor_produto = 10;

mineiro = pessoa();
soja = produto();
imposto = calculos;

console.log(JSON.stringify(mineiro), JSON.stringify(soja));
console.log('Nome: ', mineiro.nome, ', Idade: ', mineiro.idade);
console.log('Valor', calculos.valor(valor_produto))
console.log('resultado da soma', calculos.adicionar(valor_produto));