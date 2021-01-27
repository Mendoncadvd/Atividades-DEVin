/* 
Crie uma função que apresente o ranking dos livros mais vendidos. Você precisa diferenciar a 
posição apenas dos 3 primeiros do ranking, os demais serão apenas listados.
Usar rest operator
*/
function listaLivros(primeiro, segundo, terceiro, ...demaisColocados) {
    console.log(`Primeiro colocado: ${primeiro}, segundo colocado: ${segundo}, terceiro colocado ${terceiro},
        demais colocados: ${demaisColocados}`)
}

listaLivros("Livro 1", "livro 2", "livro 3", "livro 4", " livro 5", " livro 6", " livro 7")