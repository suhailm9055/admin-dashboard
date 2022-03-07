import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Edit } from '@material-ui/icons';
import { Delete } from '@material-ui/icons';
import { userRows } from '../Data';
import {Link} from "react-router-dom"



const UserContainer = styled.div`
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
const UserDetails = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column; 
  margin-right: 20px;
`;
const UserName = styled.h4`
  font-size: 18px;
  font-weight: 600;
`;
const UserTitle = styled.h5`
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



const UsersList = () => {
  const [data,setdata]=useState(userRows)
const handleDelete =  (id)=>{
  setdata(data.filter(items=>items.id !==id))
}

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 200 , renderCell:(params)=>{
      return(
        <UserContainer>
            <Img src={params.row.avatar}></Img>
            <UserDetails>
              <UserName>{params.row.username}</UserName>
              <UserTitle>Photographer</UserTitle>
            </UserDetails>
          
          </UserContainer>
      )
    }},
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Amount',
      width: 160,
    },{
      field:"edit",
      headerName:"Edit",
      width:50,
      renderCell:(params)=>{
        return(
          <Link to={"/user/"+params.row.id}>
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
          
          <IconContainer type="danger" onClick={()=>handleDelete(params.row.id)}><Delete/></IconContainer>
         
        )
      }
    }
  ];


  return (
    

    <DataGrid
    rows={data}
    columns={columns}
    pageSize={8}
    rowsPerPageOptions={[6]}
    checkboxSelection
    style={{fontSize:"20px"}}
    disableSelectionOnClick
    disableColumnSelector
    />
   
  )
}

export default UsersList