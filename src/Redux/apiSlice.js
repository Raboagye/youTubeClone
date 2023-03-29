import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
    name: "api__call",
    initialState: {
        videos: [],
        loading: false,
        nextPageToken: null,
        error: null
    },
    reducers: {
        HOME_VIDEOS_SUCCESS: (state, action) => {
            state.videos = action.payload.videos
            state.loading = false
            state.nextPageToken = action.payload.nextPageToken
        },
        HOME_VIDEOS_FAIL: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        HOME_VIDEOS_REQUEST: (state) => {
            state.loading = true
        },

        SEARCH_VIDEOS: (state, action) => {
            // state.videos = []
            state.videos = action.payload.videos
            state.loading = false
            state.nextPageToken= action.payload.nextPageToken
        }

    }

})

export const {HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST,HOME_VIDEOS_SUCCESS, SEARCH_VIDEOS} = apiSlice.actions

export default apiSlice.reducer
