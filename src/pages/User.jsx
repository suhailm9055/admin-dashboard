import {
  CalendarToday,
  MailOutline,
  MyLocation,
  PersonOutline,
  PhoneAndroid,
  Publish,
  UploadFile,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
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
const UserInfo = styled.div``;
const UserEditContainer = styled.div`
  flex: 2;
  padding: 15px 20px;
  border-radius: 10px;
  margin-left: 5px;
  background: linear-gradient(#f4ffff, #c5fdfd5a);
  box-shadow: 0px 0px 15px -10px #000000;
`;
const UserEditTitle =styled.div`
 font-size: 24px;
  padding-top: 2px;
  padding-right: 5px;
  font-weight: 600;`
const UserEditWrapper =styled.form`
display: flex;
justify-content: space-between;`
const UserEditInputs =styled.div`
display: flex;
flex-direction:column;
flex:1;`
const Label =styled.label``
const Input =styled.input`
border:none;
color: #6e7474bb;
border-bottom:1px solid grey;
background-color: #f0ffff;

`
const UserEditImg =styled.div`
display: flex;
flex:2;
flex-direction:column;
align-items:center ;

justify-content:space-between;`
const UploadImg =styled.img`
width: 200px;
height:auto;
border-radius:10px;`
const EditImg =styled.div`
display: flex;
align-items:center;`
const ButtonContianer =styled.div`
display: flex;
justify-content: center;`
// const EditImg =styled.div``
// const EditImg =styled.div``

const IconSize = "18px";
const marginInline = "10px";

const User = () => {
  return (
    <Container>
      <HeadingContainer>
        <Title>Edit User</Title>
        <Button>Create</Button>
      </HeadingContainer>
      <Wrapper>
        <UserViewContainer>
          <UserInfoContainer>
            <Img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <UserDesc>
              <UserName>Jon Snow</UserName>
              <UserTitle>Photographer</UserTitle>
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
              <UserInfo>JonSnow24</UserInfo>
            </UserDetailsContainer>
            <UserDetailsContainer>
              <Icon>
                <CalendarToday
                  style={{ fontSize: IconSize, marginInline: marginInline }}
                ></CalendarToday>
              </Icon>
              <UserInfo>02/05/2544</UserInfo>
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
              <UserInfo>jonsnow24@gmail.com</UserInfo>
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
               <Input type="text" placeholder="JonSnow24"></Input>
               <Label>Full Name</Label>
               <Input type="text" placeholder="Jon Snow"></Input>
               <Label>Email</Label>
               <Input type="email" placeholder="jonsnow24@gmail.com"></Input>
               <Label>phone</Label>
               <Input type="number" placeholder="+91 25525 25525"></Input>
               <Label>Address</Label>
               <Input type="text" placeholder="Calicut | Kerala"></Input>
           </UserEditInputs>
           <UserEditImg>
               <EditImg>
                   <UploadImg src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></UploadImg>
                   
                   <Label htmlFor="file"><Publish style={{ fontSize: IconSize, marginInline: marginInline ,cursor:"pointer"}}/></Label>
               <Input type="file" id="file" style={{display:"none"}}></Input>
               </EditImg>
               <ButtonContianer>

               <Button>Update</Button>
               </ButtonContianer>
           </UserEditImg>
       </UserEditWrapper>
        </UserEditContainer>
      </Wrapper>
    </Container>
  );
};

export default User;
