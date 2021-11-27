import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BooksContent } from './components/BooksContent/BooksContent';
import { BooksForm } from './components/BooksForm/BooksForm';
import { Mycontext } from './context/MyContext';
import { fetchbooks } from './store/booksReducer';

const App = () => {

    const [searchValue, setSearchValue] = useState('')
    const totalItems = useSelector(state => state.books.books.totalItems)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchbooks(searchValue))
    }

    return (
        <Mycontext.Provider value={{
            searchValue,
            setSearchValue,
            handleSubmit,
        }}>
            <div className="container">
                <BooksForm /> 
                {totalItems > 0 && <BooksContent /> }
            </div>
        </Mycontext.Provider>
    )
}

export default App;
