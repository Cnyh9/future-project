import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchbooks = createAsyncThunk(
    'books/fetchBooks',
    async (value, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}+intitle&key=AIzaSyCxkMixn0bqUKrii2UuzK6Ho9yQve0X8GE`)
            
            if(!response.ok) {
                throw new Error('Server Error!')
            }
            
            const data = response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        status: null,
        error: null,
    },
    extraReducers: {
        [fetchbooks.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchbooks.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.books = action.payload
        },
        [fetchbooks.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export default booksSlice.reducer;

