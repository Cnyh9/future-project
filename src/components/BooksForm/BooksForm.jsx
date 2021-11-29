import React, { useContext } from "react"
import "./BooksForm.scss"
import { MyInput } from "../MyInput/MyInput"
import { Mycontext } from "../../context/MyContext"

export const BooksForm = () => {
    const {
        searchValue,
        setSearchValue,
        handleSubmit,
        setSortValue,
        setCategory,
    } = useContext(Mycontext)

    return (
        <div>
            <form className="booksForm" onSubmit={(e) => handleSubmit(e)}>
                <h1 className="booksForm__header">Search for books</h1>
                <div>
                    <MyInput
                        placeholder="Search for..."
                        type="search"
                        value={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </div>
                <button type="submit">Search</button>
            </form>
            <div style={{ marginTop: 10 }}>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">all</option>
                    <option value="art">art</option>
                    <option value="boigraphy">boigraphy</option>
                    <option value="computers">computers</option>
                    <option value="history">history</option>
                    <option value="medical">medical</option>
                    <option value="poetry">poetry</option>
                </select>
                <select onChange={(e) => setSortValue(e.target.value)}>
                    <option value="relevance">relevance </option>
                    <option value="newest">newest</option>
                </select>
            </div>
        </div>
    )
}
