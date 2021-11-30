import React, { useContext } from "react"
import "./BooksForm.scss"
import { MyInput } from "../MyInput/MyInput"
import { Mycontext } from "../../context/MyContext"
import { MyBtn } from "../MyBtn/MyBtn"

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
            <h1 className="booksForm__header">Book search</h1>
            <form className="booksForm" onSubmit={(e) => handleSubmit(e)}>
                <MyInput
                    placeholder="Search for..."
                    type="search"
                    value={searchValue}
                    setSearchValue={setSearchValue}
                />
                <MyBtn type="submit">Search</MyBtn>
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
