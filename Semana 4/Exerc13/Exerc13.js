/* 
Considerando uma entidade Cidade, contendo os seguintes atributos nome e estado, 
crie uma função que receba uma lista de cidades e retorne a lista de estados em que o estado seja “SC”.
Usar Filter
*/
var cidade = [
    { nome: 'Florianópolis', estado: 'SC' },
    { nome: 'Jaguaruna', estado: 'SC' },
    { nome: 'Curitiba', estado: 'PR' },
    { nome: 'Rio de Janeiro', estado: 'RJ' }
]

const resultado = cidade.filter(element => element.estado === 'SC');

console.log(resultado);