const livro = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {
    const opcaoInicial = read.question ('Deseja ordenar livros por quantidade de páginas? S/N ').toUpperCase()

    if (opcaoInicial === 'S') {
        const paginas = livro.sort((a, b) => {
            return a.paginas - b.paginas
        })
        console.table(paginas)
    }
}

module.exports = listarLivrosOrdenados