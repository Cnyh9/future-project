import "./BooksContent.scss"
import React, { useContext } from "react"
import { useSelector } from "react-redux"
import { BooksCard } from "../BooksCard/BooksCard"
import { Mycontext } from "../../context/MyContext"
import { MyLoader } from "../MyLoader/MyLoader"
import { LoadMore } from "../LoadMore/LoadMore"

export const BooksContent = () => {
    const books = useSelector((state) => state.books.books)

    const status = useSelector((state) => state.books.status)

    const { loadMoreBooks } = useContext(Mycontext)

    if (status === "loading") {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <MyLoader />
            </div>
        )
    }

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
            {books?.items?.length < books.totalItems && (
                <LoadMore status={status} loadMoreBooks={loadMoreBooks} />
            )}
        </div>
    )
}
