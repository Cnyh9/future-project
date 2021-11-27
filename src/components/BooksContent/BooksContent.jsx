import './BooksContent.scss'
import React from 'react'
import { useSelector } from 'react-redux';

export const BooksContent = () => {
    
    const books = useSelector(state => state.books.books)

    return (
        <div className="booksContent">
            <h2 className="booksContent__header">Found {books.totalItems} results</h2>
            <div className="booksContent__layout">
                {books.items.map(book => {
                    return (
                        <div className="booksCard" key={book.id}>
                            <img className="booksCard__img"
                                style={{display: 'block'}}
                                src={book.volumeInfo.imageLinks 
                                    ? book.volumeInfo.imageLinks.thumbnail
                                    : 'https://via.placeholder.com/150'
                                }
                                alt=""
                            />
                            <span style={{textDecoration: 'underline'}}>{book.volumeInfo.categories}</span>
                            <div style={{fontWeight: 'bold'}}>{book.volumeInfo.title}</div>
                            <div>{book.volumeInfo.authors}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
