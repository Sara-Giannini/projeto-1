const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const listarLivrosRecomendados = require('./controllers/listarLivrosRecomendados')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')

const resposta = read.question(`
==================== Menu ====================

1 - CATEGORIA: Buscar livros por categoria
2 - ORDENAR: Ordernar livros por quantidade de páginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJOS: Busca livros não lidos

5 - SAIR

Digite um número[1-5]:
`)

switch (resposta) {
    case '1':
        buscarLivros()
        break
    case '2':
        listarLivrosOrdenados()
        break
    case '3':
        listarLivrosRecomendados()
        break
    case '4':
        listarLivrosNaoLidos()
        break
    default:
        console.log('fim')
        break    
}
