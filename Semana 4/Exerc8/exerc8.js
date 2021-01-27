/* Crie uma função que receba uma lista de valores numéricos, e utilizando a função reduce imprima 
a multiplicação dos valores da lista. 
usar reduce
*/

var numeros = [5, 1, 2, 3, 4, 5, 6];
var total = numeros.reduce((acumulador, corrente) => {
    console.info(`${acumulador} total até o momento`);
    console.log(`${corrente} valor corrente no array`);
    return acumulador *= corrente;
}, )
console.log(`Total acumulado: ${total}`);

/* é opcional o 0. O 0 neste caso será o valor inicial, e como o valor inicial seria 5, não existe necessidade de 
    passar o valor 0. Entretanto a utilidade do zero poderia ser para passar um outro array.reduce para servir como valor inicial e somar 
    junto do numeros.reduce. Por exemplo:
    const a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10];
    var ab = a.reduce((acumulador, elemento) => acumulador += elemento,
    b.reduce((acumulador, elemento) => acumulador += elemento, 0))
     */