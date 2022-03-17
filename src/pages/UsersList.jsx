import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Edit } from '@material-ui/icons';
import { Delete } from '@material-ui/icons';
import { userRows } from '../Data';
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/apiCalls';
import { format } from 'timeago.js';



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
  const users = useSelector((state)=>state.allUsers?.users)
  const [data,setdata]=useState(users)
const handleDelete =  (id)=>{
  setdata(data.filter(items=>items.id !==id))
}
const dispatch = useDispatch()
useEffect(()=>{
  getUsers(dispatch)
  
},[dispatch])

const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'user', headerName: 'User', width: 200 , renderCell:(params)=>{
      return(
        <UserContainer>
            <Img src={params.row.img}></Img>
            <UserDetails>
              <UserName>{params.row.username}</UserName>
              <UserTitle>{params.row.fullname}</UserTitle>
            </UserDetails>
          
          </UserContainer>
      )
    }},
    { field: 'email', headerName: 'Email', width: 180 },
    {
      field: 'createdAt',
      headerName: 'registered',
      width: 150,
      renderCell:(params)=>{
return format(params.row.createdAt)
      }
    },
    
    {
      field:"edit",
      headerName:"Edit",
      width:50,
      renderCell:(params)=>{
        return(
          <Link to={"/user/"+params.row._id}>
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
    rows={users}
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

export default UsersList