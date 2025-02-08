import { createSlice } from "@reduxjs/toolkit";

/**this file is need for tracking the user weather the user is authenticate or  not */
// it need three things
//initialState, name, reducer: it is a object
// here we are exporting 2 things 1. reducer from authSlice, and 
// 2.also exporting individual functions of reducer, because many components use that function for tracking the state

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;