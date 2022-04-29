const livro = require('../database')
const read = require('readline-sync')

const listarLivrosRecomendados = () => {
    const opcaoInicial = read.question ('Deseja buscar livros recomendados? S/N ').toUpperCase()

    if (opcaoInicial === 'S') {
        const recomenda = livro.filter(livros => livros.recomenda === true)
        console.table(recomenda)
    }
}

module.exports = listarLivrosRecomendados