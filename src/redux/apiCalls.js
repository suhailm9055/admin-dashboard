import  useDispatch  from "react-redux"
import { publicRequest, userRequest } from "../requestMethods";
import { addProductFailed, addProductStarted, addProductSucceed, deleteProductFailed, deleteProductStarted, deleteProductSucceed, getProductFailed, getProductStarted, getProductSucceed, updateProductFailed, updateProductStarted, updateProductSucceed } from "./productRedux";
import { loginFailure, loginStart, loginSuccess, logoutSuccess } from "./userRedux"

export const login = async ( dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user)
        console.log(user);
        dispatch(loginSuccess(res.data))
    }catch(err){
        const res = await publicRequest.post("/auth/login",user)
        dispatch(loginFailure(res.data))

    }
    
}
export const logout =  (dispatch)=>{
    
        dispatch(logoutSuccess())
    
    
}
export const getProducts = async (dispatch)=>{
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
export const updateProduct = async (id,product,dispatch)=>{
    dispatch(updateProductStarted());
    try{
        const res = await userRequest.put(`/products/update/${id}`,product)
        dispatch(updateProductSucceed(id,product))
        console.log(product);
    }catch(err){
        dispatch(updateProductFailed())

    }
    
}
export const addProduct = async (product,dispatch)=>{
    dispatch(addProductStarted());
    try{
        const res = await userRequest.post("/products/add",product)
        dispatch(addProductSucceed(res.data))
    }catch(err){
        dispatch(addProductFailed())

    }
    
}