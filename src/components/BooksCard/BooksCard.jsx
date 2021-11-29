import "./BooksCard.scss"
import React, { useContext } from "react"
import { fetchBookInfo } from "../../store/bookInfoReducer"
import { useDispatch } from "react-redux"
import { Mycontext } from "../../context/MyContext"

export const BooksCard = ({ preview, categories, title, authors, id }) => {
    const dispatch = useDispatch()
    const { setModal } = useContext(Mycontext)

    return (
        <div
            className="booksCard"
            onClick={() => dispatch(fetchBookInfo({ id, setModal }))}
        >
            <div className="booksCard__img">
                <img
                    src={
                        preview
                            ? preview.thumbnail
                            : "https://via.placeholder.com/128x180"
                    }
                />
            </div>
            <div className="booksCard__categories">
                {categories ? categories : "_"}
            </div>
            <div className="booksCard__title">{title}</div>
            <div className="booksCard__authors">{authors}</div>
        </div>
    )
}
