/* 
Considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 crie uma função 
que receba um objeto cidade e atribua nome e o estado a duas variáveis e imprima elas no console.
Usar destructuring
*/
var cidade = [
    { nome: 'Florianópolis', estado: 'SC' },
    { nome: 'Jaguaruna', estado: 'SC' },
    { nome: 'Curitiba', estado: 'PR' },
    { nome: 'Rio de Janeiro', estado: 'RJ' }
]

function recebeCidade(cidade) {
    let [nome, estado] = cidade;

    console.log(`Cidade: ${nome.nome} e Estado: ${estado.estado}`);
}

recebeCidade(cidade);