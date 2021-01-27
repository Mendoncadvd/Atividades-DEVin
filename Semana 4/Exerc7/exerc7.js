/* Novamente considerando a entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO crie uma função que 
receba uma lista de pessoas e retorne a primeira pessoa com idade maior que 18 anos.
usar find
 */
David = {
    nome: 'David',
    idade: 17,
    telefone: '12345',
    profissao: 'Estudante'
}

Joao = {
    nome: 'João',
    idade: 22,
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

var resultado = pessoa.find(element => element.idade >= 18);
console.log(resultado);