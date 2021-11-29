import React from "react"
import "./MyBtn.scss"

export const MyBtn = ({ children, loadMoreBooks }) => {
    return (
        <button className="myBtn" onClick={loadMoreBooks}>
            {children}
        </button>
    )
}
