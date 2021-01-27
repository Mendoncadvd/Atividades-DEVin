/* 
Crie uma arrowFunction que receba um objeto contendo altura e largura de um retângulo e retorne a área do retângulo.
*/

Retangulo = {
    altura: 20,
    largura: 8
}


var calcularArea = (retangulo) => console.log(retangulo.altura * retangulo.largura);

calcularArea(Retangulo);