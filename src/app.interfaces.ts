export interface bookData {
    authors: string[]
    categories: string[]
    isbn: string
    longDescription: string
    pageCount: number
    publishDate: string
    shortDescription: string
    status: string
    thumbnailURL: string
    title: string
}

export interface bookDataFiltred {
    id: number
    authors: string[]
    genre: string[]
    image: string
    title: string
}