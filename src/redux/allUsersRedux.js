import { createSlice } from "@reduxjs/toolkit";


const allUsersSlice = createSlice({
    name:"allUsers",
    initialState:{
        users:null,
        isFetching:null,
        error:null
    },
    reducers:{
        getUsersStart:(state)=>{ 
            state.isFetching = true
        },
        getUsersSuccess:(state,action)=>{
            state.isFetching = false;
            state.users = action.payload
            state.error = false
        },
        getUsersFailure:(state,action)=>{ 
            state.isFetching = false;
            state.error = action.payload
        },
        updateUserStart:(state)=>{ 
            state.isFetching = true
        },
        updateUserSuccess:(state,action)=>{
            state.isFetching = false;
            state.users[state.users.findIndex((item) => item._id === action.payload.id)]=action.payload.users;
            state.error = false
        },
        updateUserFailure:(state,action)=>{ 
            state.isFetching = false;
            state.error = action.payload
        },
        addUserStart:(state)=>{ 
            state.isFetching = true
        },
        addUserSuccess:(state,action)=>{
            state.isFetching = false;
            state.users.push(action.payload)
            state.error = false
        },
        addUserFailure:(state,action)=>{ 
            state.isFetching = false;
            state.error = action.payload
        },
        
        
        
        
        }
})

export const {getUsersStart,getUsersSuccess,getUsersFailure,updateUserFailure,updateUserStart,updateUserSuccess,addUserStart,addUserSuccess,addUserFailure}= allUsersSlice.actions
export default allUsersSlice.reducer;