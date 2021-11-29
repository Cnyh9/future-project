import React, { useContext } from "react"
import { useSelector } from "react-redux"
import { Mycontext } from "../../context/MyContext"
import "./BookInfo.scss"

export const BookInfo = () => {
    const bookInfo = useSelector((state) => state.info.bookInfo.volumeInfo)

    const { setModal } = useContext(Mycontext)

    return (
        <div className="bookInfo">
            <div className="bookInfo__preview">
                <img src={bookInfo?.imageLinks?.small} alt="" />
            </div>
            <div className="bookInfo__content">
                <div
                    className="bookInfo__close"
                    onClick={() => setModal(false)}
                >
                    back
                </div>
                <div className="bookInfo__category">{bookInfo?.categories}</div>
                <div className="bookInfo__title">{bookInfo?.title}</div>
                <div className="bookInfo__authors">{bookInfo?.authors}</div>
                <div className="bookInfo__description">
                    {bookInfo?.description}
                </div>
            </div>
        </div>
    )
}
