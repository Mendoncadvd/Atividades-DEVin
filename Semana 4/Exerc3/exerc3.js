//Considerando uma entidade Pessoa que contém os atributos nome, idade, telefone e profissão, 
//crie uma função que receba uma lista de pessoas e descubra se alguma das pessoas 
//da lista é maior de idade (18 anos) retornando o resultado.
//utilizar o some
David = {
    nome: 'David',
    idade: 20,
    telefone: '12345',
    profissão: 'Estudante'
}

Joao = {
    nome: 'João',
    idade: 16,
    telefone: '12345',
    profissao: 'Estudante'
}

Maria = {
    nome: 'Maria',
    idade: 17,
    telefone: '12345',
    profissao: 'Estudante'
}

var pessoa = [David, Joao, Maria];

var resultado = pessoa.some(element => element.idade >= 18);

console.log(resultado)