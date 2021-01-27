/* Novamente considerando a entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO crie uma função que 
receba uma lista de pessoas e retorne uma lista com os nomes das pessoas. 
usar o map
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

var resultado = pessoa.map(element => console.log(element.nome));