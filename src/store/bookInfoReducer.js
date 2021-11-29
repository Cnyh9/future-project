import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchBookInfo = createAsyncThunk(
    "bookInfo/fetchBookInfo",
    async ({ id, setModal }, { rejectWithValue }) => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes/${id}`
            )
            if (!response.ok) {
                throw new Error("Server Error!")
            }
            setModal(true)
            const data = response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const bookInfoSlice = createSlice({
    name: "bookInfo",
    initialState: {
        bookInfo: {},
        status: null,
        error: null,
    },
    extraReducers: {
        [fetchBookInfo.pending]: (state) => {
            state.status = "loading"
            state.error = null
        },
        [fetchBookInfo.fulfilled]: (state, action) => {
            state.status = "resolved"
            state.bookInfo = action.payload
        },
        [fetchBookInfo.rejected]: (state, action) => {
            state.status = "rejected"
            state.error = action.payload
        },
    },
})

export default bookInfoSlice.reducer
