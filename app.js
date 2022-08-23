const readLine = require('readline-sync')
const books = require('./database')

const initialInput = readLine.question('Deseja buscar um livro?? S/N ')

if (initialInput.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponíveis:')
  console.log("/História", "/Fantasia Épica", "/Contos", "/Música");

  const choosedCategory = readLine.question('Qual categoria voce escolhe: ')

  const category = books.filter((book) => book.category === choosedCategory)
  console.table(category)
  
} else {
  books.sort((a, b) => a.pages - b.pages)
  console.log('Esses são os livros disponíveis:')
  console.table(books)
}