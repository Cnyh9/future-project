import React, { useContext } from 'react'
import './BooksForm.scss'
import { MyInput } from '../MyInput/MyInput'
import { Mycontext } from '../../context/MyContext'
import { MySelect } from '../MySelect/MySelect'

export const BooksForm = () => {

    const {searchValue, setSearchValue, handleSubmit} = useContext(Mycontext)

    return (
        <form className="booksForm" onSubmit={e => handleSubmit(e)}>
            <h1 className="booksForm__header">
                Search for books
            </h1>
            <div>
                <MyInput 
                    placeholder="Search for..."
                    type="search"
                    value={searchValue}
                    setSearchValue={setSearchValue}
                 />
            </div>
            <div>
                <MySelect>
                    <option value="">all</option>
                    <option value="">art</option>
                    <option value="">boigraphy</option>
                    <option value="">computers</option>
                    <option value="">history</option>
                    <option value="">medical</option>
                    <option value="">poetry</option>
                </MySelect>
                <MySelect>
                    <option value="">relevance </option>
                    <option value="">newest</option>
                </MySelect>
            </div>
        </form>
    )
}
