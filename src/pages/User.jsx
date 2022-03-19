import {
  CalendarToday,
  MailOutline,
  MyLocation,
  PersonOutline,
  PhoneAndroid
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
import { getUsers, updateUser } from "../redux/apiCalls";

const Container = styled.div``;
const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;
const Title = styled.h1`
  font-size: 24px;
  padding-top: 2px;
  padding-right: 5px;
`;
const Button = styled.button`
  padding: 3px 7px;
  padding-top: 7px;
  font-size: 18px;
  letter-spacing: 2px;
  /* border-radius: 25px; */
  font-weight: 500;
  background: #008080;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border: 1px solid #006363;
  box-shadow: 2px 2px 5px 1px #11111153;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    background: #06d6d6dc;
    color: #4d4d4de6;
    font-weight: bold;
  }
`;
const Wrapper = styled.div`
  display: flex;
  padding: 10px;
`;
const UserViewContainer = styled.div`
  flex: 1;
  padding: 15px 20px;
  border-radius: 10px;

  background: linear-gradient(#f4ffff, #c5fdfd5a);
  box-shadow: 0px 0px 15px -10px #000000;
`;
const UserInfoContainer = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
`;
const UserDesc = styled.div``;
const UserName = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
const UserTitle = styled.h5`
  font-size: 15px;
  color: gray;
  height: 20px;
`;
const AccountContainer = styled.div`
  margin: 10px 0px;
`;
const AccountTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #6e7474bb;
`;
const UserDetailsContainer = styled.div`
  display: flex;
`;
const Icon = styled.div``;
const UserInfo = styled.div`
 font-size: 20px;`;
const UserEditContainer = styled.div`
  flex: 2;
  padding: 15px 20px;
  border-radius: 10px;
  margin-left: 5px;
  background: linear-gradient(#f4ffff, #c5fdfd5a);
  box-shadow: 0px 0px 15px -10px #000000;
`;
const UserEditTitle = styled.div`
  font-size: 24px;
  padding-top: 2px;
  padding-right: 5px;
  font-weight: 600;
`;
const UserEditWrapper = styled.form`
  display: flex;
  justify-content: space-between;
`;
const UserEditInputs = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const Label = styled.label`
font-size: 18px;`;
const Input = styled.input`
  border: none;
  color: gray;
  border-bottom: 1px solid #969696ba;
  background-color: #f0ffff;
  height: 20px;
  padding: 10px;
  border-radius:5px;
  font-size: 18px;
  &:hover,:focus{
  box-shadow: 0px 6px 22px -10px #06d6d6dc;
  outline:none;
}
`;
const UserEditImg = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;

  justify-content: space-between;
`;
const UploadImg = styled.img`
  width: 200px;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
  z-index: 1;
`;
const InfoImgHover = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000076;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EditImg = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  &:hover ${InfoImgHover} {
    opacity: 1;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
 
`;
const ImgButton = styled.div`
  background-color: #fff;

  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 18px;
  font-weight: 500;
  background: #00808073;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border: 1px solid #006363;
  box-shadow: 2px 2px 5px 1px #11111153;
  transition: all 0.5s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
    background: #06d6d697;
    color: ${(props) => (props.color === "red" ? "red" : "#2b2b2be6")};
    font-weight: bold;
  }
`;
const Select =styled.select`
border: none;
color: gray;
background-color: #f0ffff;
border-bottom: 1px solid #969696ba;
height: 40px;
padding: 10px;
border-radius:5px;
font-size: 18px;
&:hover:focus{
box-shadow: 0px 6px 22px -10px #06d6d6dc;
outline:none;
}
`
const Option =styled.option`
`

const IconSize = "19px";
const marginInline = "10px";

const User = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const user = useSelector((state)=>state.allUsers?.users.find(user=>user._id===userId))
  const [userUpdate, setUserUpdate] = useState(user)
  const dispatch = useDispatch()
      useEffect(()=>{
        getUsers(dispatch)
      },[dispatch])
  const handleChange=(e)=>{
    setUserUpdate(prev=>{
      return {...prev,[e.target.name]:e.target.value}})
    }
    const handleUpdate=(e)=>{
      e.preventDefault()
      getUsers(dispatch)
      updateUser(userId,userUpdate,dispatch)
    }
console.log(userUpdate);
  return (
    <Container>
      <HeadingContainer>
        <Title>Edit User</Title>
        <Link to="/adduser">
          <Button>Create</Button>
        </Link>
      </HeadingContainer>
      <Wrapper>
        <UserViewContainer>
          <UserInfoContainer>
            <Img src={userUpdate.img ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"} />
            <UserDesc>
              <UserName>{user.username}</UserName>
              {/* <UserTitle>Photographer</UserTitle> */}
            </UserDesc>
          </UserInfoContainer>
          <AccountContainer>
            <AccountTitle>Account Details</AccountTitle>
            <UserDetailsContainer>
              <Icon>
                <PersonOutline
                  style={{ fontSize: IconSize, marginInline: marginInline }}
                />
              </Icon>
              <UserInfo>{user.username}</UserInfo>
            </UserDetailsContainer>
            <UserDetailsContainer>
              <Icon>
                <CalendarToday
                  style={{ fontSize: IconSize, marginInline: marginInline }}
                ></CalendarToday>
              </Icon>
              <UserInfo>registered:{format(user.createdAt)}</UserInfo>
            </UserDetailsContainer>
            <UserDetailsContainer>
              <Icon>
                <CalendarToday
                  style={{ fontSize: IconSize, marginInline: marginInline }}
                ></CalendarToday>
              </Icon>
              <UserInfo>Updated:{format(user.updatedAt)}</UserInfo>
            </UserDetailsContainer>
          </AccountContainer>
          <AccountContainer>
            <AccountTitle>Contact Details</AccountTitle>
            <UserDetailsContainer>
              <Icon>
                <PhoneAndroid
                  style={{ fontSize: IconSize, marginInline: marginInline }}
                />
              </Icon>
              <UserInfo>+91 25525 25525</UserInfo>
            </UserDetailsContainer>
            <UserDetailsContainer>
              <Icon>
                <MailOutline
                  style={{ fontSize: IconSize, marginInline: marginInline }}
                />
              </Icon>
              <UserInfo>{user.email}</UserInfo>
            </UserDetailsContainer>
            <UserDetailsContainer>
              <Icon>
                <MyLocation
                  style={{ fontSize: IconSize, marginInline: marginInline }}
                />
              </Icon>
              <UserInfo>Calicut | Kerala</UserInfo>
            </UserDetailsContainer>
          </AccountContainer>
        </UserViewContainer>
        <UserEditContainer>
          <UserEditTitle>Edit</UserEditTitle>
          <UserEditWrapper>
            <UserEditInputs>
              <Label>Username</Label>
              <Input type="text" placeholder={user.username} name="username" onChange={handleChange}></Input>
              <Label>Full Name</Label>
              <Input type="text" placeholder={user.fullname} name="fullname" onChange={handleChange}></Input>
              <Label>Email</Label>
              <Input type="email" placeholder={user.email} name="email" onChange={handleChange}></Input>
              <Label>phone</Label>
              <Input type="number" placeholder={user.phone} name="phone" onChange={handleChange}></Input>
              <Label>Address</Label>
              <Input type="text" placeholder={user.address} name="address" onChange={handleChange}></Input>
              <Label>Admin</Label>
              {userUpdate.isAdmin ? <Select name="isAdmin" id='isAdmin' onChange={handleChange}>
               <Option value="true" selected>yes</Option>
               <Option value="false" >no</Option>
               </Select>
               :
               <Select name="isAdmin" id='isAdmin' onChange={handleChange}>
               <Option value="true" >yes</Option>
               <Option value="false" selected>no</Option>
               
               </Select>
               }
            </UserEditInputs>
            <UserEditImg>
              <EditImg>
                <InfoImgHover>
                  <Label htmlFor="file">
                    <ImgButton>Upload Image</ImgButton>
                  </Label>
                </InfoImgHover>
                <UploadImg src={userUpdate.img ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"}></UploadImg>

                <Input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                ></Input>
              </EditImg>
              <ButtonContainer>
                <Button onClick={handleUpdate}>Update</Button>
              </ButtonContainer>
            </UserEditImg>
          </UserEditWrapper>
        </UserEditContainer>
      </Wrapper>
    </Container>
  );
};

export default User;
