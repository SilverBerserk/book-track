import { memo, useEffect, useState } from "react"
import { getBooks } from "../app.api"
import { bookDataFiltred } from "../app.interfaces"
import Book, { BookList } from "../components/Book/Book"
import ModalBook from "../components/ModalBook/ModalBook"

import './main.scss'

interface mainProps {
    view: boolean
    filter: string | null
}

const Main = ({ view, filter }: mainProps) => {
    const [load, setLoad] = useState<boolean>(true)
    const [error, setError] = useState<string>()
    const [data, setData] = useState<bookDataFiltred[]>([])
    const [modalData, setModalData] = useState<bookDataFiltred>()

    const filtered = filter ?
        data.filter(e => e.authors.join('').toLowerCase().includes(filter.toLowerCase()) ||
            e.title.toLowerCase().includes(filter.toLowerCase()) ||
            e.genre.join('').toLowerCase().includes(filter.toLowerCase())
        )
        : data

    useEffect(() => {
        onGetBooks()
    }, [])


    const onGetBooks = () => {
        setLoad(true)
        getBooks
            .then(res => {
                setData(res)
                setLoad(false)
            })
            .catch(err => {
                setError(err)
                setLoad(false)
            })
    }

    if (load)
        return <div>Loading...</div>

    if (error) return <div>{error}</div>

    if (filtered.length === 0) return <div>no books</div>

    return (
        <>
            <div className={'main' + (view ? '' : ' main-list')}>{filtered.map(book =>
                view ? <Book key={book.id} {...book} onClick={() => setModalData({ ...book })} /> :
                    <BookList key={book.id} {...book} onClick={() => setModalData({ ...book })} />)}
            </div>
            {modalData && <ModalBook {...modalData} onClick={() => setModalData(undefined)} />}
        </>
    )
}

export default memo(Main)