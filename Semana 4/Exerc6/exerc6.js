/* Novamente considerando a entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO crie uma função que 
receba uma lista de pessoas e retorne uma nova lista contendo apenas as pessoas com idade menor que 18 anos.
usar filter 
*/

David = {
    nome: 'David',
    idade: 20,
    telefone: '12345',
    profissao: 'Estudante'
}

Joao = {
    nome: 'João',
    idade: 16,
    telefone: '12345',
    profissao: 'Programador'
}

Maria = {
    nome: 'Maria',
    idade: 17,
    telefone: '12345',
    profissao: 'Programador'
}

var pessoa = [David, Joao, Maria];

var resultado = pessoa.filter(element => element.idade <= 18);
console.log(resultado);