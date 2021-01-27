/* 
Novamente considerando a entidade Cidade do exercício 13: https://trello.com/c/4YnGrbg1 crie 
uma função que receba uma lista de cidades e verifique se alguma das cidades é do estado “RS”, retornando o resultado.
Usar some
*/
var cidade = [
    { nome: 'Florianópolis', estado: 'SC' },
    { nome: 'Jaguaruna', estado: 'SC' },
    { nome: 'Curitiba', estado: 'PR' },
    { nome: 'Rio de Janeiro', estado: 'RJ' }
]

function cidadeRS(cidade) {
    if (cidade.some(estado => { estado.estado == 'RS' }) == true) {
        console.log("Alguma das cidades é do RS");
    } else {
        console.log("Nenhuma das cidades é do RS")
    }
}

cidadeRS(cidade)