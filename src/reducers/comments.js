import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const comments = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const comments = state.comments
      comments.push(action.payload)
      state.comments = comments
    },
    removeComments: (state, action) => {
      const comments = state.comments
      const comment = action.payload
      const newList = comments.filter((item) => item.message !== comment.message);
			state.comments = newList
    }
  }
})