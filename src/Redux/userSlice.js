import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: sessionStorage.getItem("ytc-profile")?JSON.parse(sessionStorage.getItem("ytc-profile")) : null,
        loading: false,
        accessToken: sessionStorage.getItem("ytc-access-token")? sessionStorage.getItem("ytc-access-token"): null,
        error: null,
    },
    reducers : {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
            state.accessToken = null
            state.loading = false
        },

        login_Request: (state) => {
            state.loading = true
        },

        login_Success: (state, action) => {
            state.loading = false
            state.accessToken = action.payload
        },

        login_Fail: (state, action) => {
            state.accessToken = null
            state.error = action.payload
            state.loading = false
        }
    }
})

export const {login, logout, login_Request, login_Fail, login_Success} = userSlice.actions
export default userSlice.reducer