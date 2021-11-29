import React, { useContext } from "react"
import "./LoadMore.scss"
import { MyLoader } from "../MyLoader/MyLoader"
import { MyBtn } from "../MyBtn/MyBtn"
import { Mycontext } from "../../context/MyContext"

export const LoadMore = ({ status }) => {
    const { loadMoreBooks } = useContext(Mycontext)
    return (
        <div className="loadMore">
            {status === "uploading" ? (
                <MyLoader />
            ) : (
                <MyBtn loadMoreBooks={loadMoreBooks}>Load more</MyBtn>
            )}
        </div>
    )
}
