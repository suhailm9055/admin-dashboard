import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:null,
        error:null
    },
    reducers:{
        loginStart:(state)=>{ 
            state.isFetching = true
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false;
            state.currentUser = action.payload
            state.error = false
        },
        loginFailure:(state,action)=>{ 
            state.isFetching = false;
            state.error = action.payload
        },
        
        logoutSuccess:(state)=>{
            
            state.currentUser = null;
        },
        
        
        }
})

export const {loginStart,loginSuccess,loginFailure,logoutSuccess}= userSlice.actions
export default userSlice.reducer;