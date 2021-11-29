import { configureStore } from "@reduxjs/toolkit"
import bookInfoReducer from "./bookInfoReducer"
import booksReducer from "./booksReducer"

export default configureStore({
    reducer: {
        books: booksReducer,
        info: bookInfoReducer,
    },
})
