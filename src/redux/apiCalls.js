import  useDispatch  from "react-redux"
import { publicRequest, userRequest } from "../requestMethods";
import { deleteProductFailed, deleteProductStarted, deleteProductSucceed, getProductFailed, getProductStarted, getProductSucceed } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async ( dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())

    }
    
}
export const getProducts = async ( dispatch)=>{
    dispatch(getProductStarted());
    try{
        const res = await publicRequest.get("/products")
        dispatch(getProductSucceed(res.data))
    }catch(err){
        dispatch(getProductFailed())

    }
    
}
export const deleteProduct = async (id,dispatch)=>{
    dispatch(deleteProductStarted());
    try{
        // const res = await userRequest.delete(`/products/delete/${id}`)
        dispatch(deleteProductSucceed(id))
    }catch(err){
        dispatch(deleteProductFailed())

    }
    
}