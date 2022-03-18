
import axios from 'axios'
import { bookData, bookDataFiltred } from './app.interfaces'

const booksMap = (books: bookData[]): bookDataFiltred[] => {
    return books.map((book, i) => ({
        id: i,
        image: book.thumbnailURL,
        title: book.title,
        authors: book.authors,
        genre: book.categories
    }))
}

export const getBooks = axios.get('https://riabooksapi.azurewebsites.net/books')
    .then(res => booksMap(res.data.books))
    .catch(err => err.message)

