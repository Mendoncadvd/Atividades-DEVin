//Considerando a mesma entidade Pessoa do exercício 3: https://trello.com/c/LgeM2xcO 
//crie uma função que receba uma lista de pessoas e descubra se todas as pessoas da lista possuem a profissão 
//“Programador” retornando o resultado.
//usar o every
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

var resultado = pessoa.every(element => console.log(element.profissao == 'Programador'))