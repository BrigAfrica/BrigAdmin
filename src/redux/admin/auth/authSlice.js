import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState : {
        isAuthenticated: false,
        token: null,
        user: null,

    },
    reducers : {    
        setToken: (state, action) => {
                state.token = action.payload;
                state.isAuthenticated = true;
        },

        clearToken: (state) => {
            state.token = null;
            state.isAuthenticated = false
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
        
     }
})


export const {setToken, clearToken,setUser} = authSlice.actions;

export default authSlice.reducer 