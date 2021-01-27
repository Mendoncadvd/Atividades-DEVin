//Crie uma função que receba como parâmetro uma lista de notas e calcule a média dessas notas imprimindo o resultado.
const notas = [0, 10, 7.5, 9, 8];
var media = 0;

notas.forEach(
    notafinal => media += (notafinal / notas.length)
)
console.log(media);