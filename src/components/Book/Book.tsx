import { bookDataFiltred } from "../../app.interfaces"
import './book.scss'

interface bookDataProps extends bookDataFiltred {
    onClick(): void
}

export const Book = ({ image, title, authors, genre, onClick }: bookDataProps) => {
    return (
        <div className='book' style={{ backgroundImage: `url(${image})` }} onClick={onClick}>
            <div className='book-title'>{title}</div>
            <div className='book-author'>{authors.join(',')}</div>
            <div className='book-genre'>{genre.join(',')}</div>
        </div>
    )
}

export const BookList = ({ image, title, authors, genre, onClick }: bookDataProps) => {
    return (
        <div className='book-list' onClick={onClick}>
            <div className='book-list-image' style={{ backgroundImage: `url(${image})` }} />
            <div className='book-title'>{title}</div>
            <div className='book-author'>{authors.join(',')}</div>
            <div className='book-genre'>{genre.join(',')}</div>
        </div >
    )
}

export default Book