/* 
Crie uma função que retornará uma promise, ela receberá dois valores numéricos como parâmetro, 
a função deve somar os dois valores e somente resolver a promise caso o resultado seja par retornando 
o valor da soma e rejeitando a promise caso ímpar, retornando uma mensagem explicativa
Usar promise
*/

function somaValores(a, b) {
    return new Promise((resolve, reject) => {
        let somatorio = a + b;
        if (somatorio % 2 == 0) {
            resolve(`O valor da soma é par: ${somatorio}`)
        } else {
            reject(`O valor da soma é ímpar: ${somatorio}`)
        }
    })
}

somaValores(2, 1)
    .then(resultado => console.log('Resultado: ', resultado))
    .catch(resultado => console.log('Resultado: ', resultado));