import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BookInfo } from "./components/BookInfo/BookInfo"
import { BooksContent } from "./components/BooksContent/BooksContent"
import { BooksForm } from "./components/BooksForm/BooksForm"
import { Mycontext } from "./context/MyContext"
import { fetchbooks, fetchMoreBooks } from "./store/booksReducer"

const App = () => {
    const [searchValue, setSearchValue] = useState("")
    const [sortValue, setSortValue] = useState("relevance")
    const [category, setCategory] = useState("")
    const [booksIndex, setBooksIndex] = useState(30)
    const [modal, setModal] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(
            fetchbooks({
                search: searchValue,
                sort: sortValue,
                category: category,
            })
        )
    }

    const loadMoreBooks = () => {
        dispatch(
            fetchMoreBooks({
                search: searchValue,
                sort: sortValue,
                category: category,
                index: booksIndex,
            })
        )
        setBooksIndex(booksIndex + 30)
    }

    return (
        <Mycontext.Provider
            value={{
                searchValue,
                setSearchValue,
                handleSubmit,
                setSortValue,
                setCategory,
                loadMoreBooks,
                modal,
                setModal,
            }}
        >
            <div className="container">
                <BooksForm />
                {/* <BooksContent /> */}
                {!modal ? <BooksContent /> : <BookInfo />}
            </div>
        </Mycontext.Provider>
    )
}

export default App
