
import { bookDataFiltred } from '../../app.interfaces'
import './modalBook.scss'

interface ModalBookProps extends bookDataFiltred {
    onClick(): void
}

const ModalBook = ({ onClick, image, title, authors, genre }: ModalBookProps) => {
    return (
        <div className='modal' onClick={onClick} >
            <div className='modal-book' style={{ backgroundImage: `url(${image})` }} >
                <div className='book-title'>{title}</div>
                <div className='book-author'>{authors.join(',')}</div>
                <div className='book-genre'>{genre.join(',')}</div>
            </div>
        </div >
    )
}

export default ModalBook