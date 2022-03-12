
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Edit } from '@material-ui/icons';
import { Delete } from '@material-ui/icons';
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteProduct, getProducts } from '../redux/apiCalls';


const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  /* margin: 10px 15px; */
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit:cover;
`;
const ProductDetails = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column; 
  margin-right: 20px;
`;
const ProductName = styled.h4`
  font-size: 18px;
  font-weight: 600;
`;
const ProductTitle = styled.h5`
  font-size: 15px;
  color: gray;
  height: 20px;
`;
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 15px;
  cursor: pointer;
  color: #807e7e;
  transition: all 0.1s ease;
  &:hover {
    color:${props=>props.type==="danger"?"#e08a8a":"#74a2e7"} ;
    transform:scale(1.1);
    /* box-shadow:1px 1px 2px 2px red; */
  }
`;

const Products = () => {
  const handleDelete =  (id)=>{
    deleteProduct(id,dispatch)
  }
  const dispatch =useDispatch()
const products = useSelector((state)=>state.product.products)
  useEffect(()=>{
    getProducts(dispatch)
  },[dispatch])
  

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'product', headerName: 'Product', width: 200 , renderCell:(params)=>{
      return(
        <ProductContainer>
            <Img src={params.row.img}></Img>
            <ProductDetails>
              <ProductName>{params.row.title}</ProductName>
              {/* <ProductTitle>{params.row.title}</ProductTitle> */}
            </ProductDetails>
          
          </ProductContainer>
      )
    }},
    { field: 'inStock', headerName: 'Stock', width: 130 },
    
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },{
      field:"edit",
      headerName:"Edit",
      width:50,
      renderCell:(params)=>{
        return(
          <Link to={"/product/"+params.row.id}>
          <IconContainer><Edit/></IconContainer>
          </Link>
         
        )
      }
    
    },{
      field:"delete",
      headerName:"Delete",
      width:50,
      renderCell:(params)=>{
        return(
          
          <IconContainer type="danger" onClick={()=>handleDelete(params.row._id)}><Delete/></IconContainer>
         
        )
      }
    }
  ];
  return (
    <DataGrid
    rows={products}
    columns={columns}
    pageSize={8}
    getRowId={(rows)=>rows._id}
    rowsPerPageOptions={[6]}
    checkboxSelection
    style={{fontSize:"20px"}}
    disableSelectionOnClick
    disableColumnSelector
    />
  )
}

export default Products