import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchbooks = createAsyncThunk(
    "books/fetchBooks",
    async ({ search, sort, category }, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${category}&maxResults=30&startIndex=0&orderBy=${sort}`
            )

            if (!response.ok) {
                throw new Error("Server Error!")
            }

            const data = response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchMoreBooks = createAsyncThunk(
    "books/fetchMoreBooks",
    async ({ search, sort, category, index }, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${category}&maxResults=30&startIndex=${index}&orderBy=${sort}`
            )

            if (!response.ok) {
                throw new Error("Server Error!")
            }

            const data = response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const booksSlice = createSlice({
    name: "books",
    initialState: {
        books: {},
        status: null,
        error: null,
    },
    extraReducers: {
        [fetchbooks.pending]: (state) => {
            state.status = "loading"
            state.error = null
        },
        [fetchbooks.fulfilled]: (state, action) => {
            state.status = "resolved"
            state.books = action.payload
        },
        [fetchbooks.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        },
        [fetchMoreBooks.pending]: (state) => {
            state.status = "uploading"
            state.error = "null"
        },
        [fetchMoreBooks.fulfilled]: (state, action) => {
            state.status = "resolved"
            state.books.items = [...state.books.items, ...action.payload.items]
        },
        [fetchMoreBooks.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        },
    },
})

export default booksSlice.reducer
