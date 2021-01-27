/* 
Declare uma arrowFunction que deverá possuir dois parâmetros (nome, idade). 
A nossa função deve mostrar no console a seguinte frase: “Olá, eu sou <nome>, e tenho <idade> anos”.
Usar Arrow function
*/

const nome = "Fulano";
const idade = 18;

const frase = (nome, idade) => console.log(`Olá, eu sou ${nome}, e tenho ${idade} anos.`);

frase(nome, idade);