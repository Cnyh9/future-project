import "./BooksContent.scss"
import React, { useContext } from "react"
import { useSelector } from "react-redux"
import { BooksCard } from "../BooksCard/BooksCard"
import { Mycontext } from "../../context/MyContext"

export const BooksContent = () => {
    const books = useSelector((state) => state.books.books)

    const { loadMoreBooks } = useContext(Mycontext)

    return (
        <div className="booksContent">
            <h2 className="booksContent__header">
                Found {books.totalItems || 0} results
            </h2>
            <div className="booksContent__layout">
                {books?.items?.map((book) => {
                    return (
                        <BooksCard
                            key={book.id}
                            preview={book.volumeInfo.imageLinks}
                            categories={book.volumeInfo.categories}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                        />
                    )
                })}
            </div>
            <button onClick={loadMoreBooks}>load more</button>
        </div>
    )
}
