/* 
Considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 crie uma função que recebe uma 
lista de cidades e retorna uma lista com os nomes das cidades concatenados com o seu estado.
Usar map/template string
*/

var cidade = [
    { nome: 'Florianópolis', estado: 'SC' },
    { nome: 'Jaguaruna', estado: 'SC' },
    { nome: 'Curitiba', estado: 'PR' },
    { nome: 'Rio de Janeiro', estado: 'RJ' }
]

function pegaCidades(cidade) {
    cidade.map(cidades => { console.log(`${cidades.nome}-${cidades.estado}`) });
}

pegaCidades(cidade);