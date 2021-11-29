import './BooksCard.scss'
import React from 'react'

export const BooksCard = ({
    preview, categories,
    title, authors
}) => {
    return (
        <div className="booksCard">
            <div className="booksCard__img">
                <img src={preview? preview.thumbnail:'https://via.placeholder.com/128x180'} alt="" />
            </div>
            <div className="booksCard__categories">
                {categories? categories : "_"}
            </div>
            <div className="booksCard__title">
                {title}
            </div>
            <div className="booksCard__authors">
                {authors}
            </div>
        </div>
    )
}
