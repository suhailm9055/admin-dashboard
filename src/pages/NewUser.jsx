import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addUser } from '../redux/apiCalls';


const Container = styled.div`
flex:4;`;
const MainTitle = styled.h2``;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  padding: 15px 20px;
  border-radius: 10px;
  margin-left: 5px;
  background: linear-gradient(#f4ffff, #c5fdfd5a);
  box-shadow: 0px 0px 15px -10px #000000;
  `;
  const Form = styled.form`
  
  display:flex ;
  flex-wrap: wrap;
`;
  const InputItem = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
margin-top: 10px;
margin-right: 20px;

  `;
  const Label = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight:600 ;
  color:gray;
  `;
const Input = styled.input`
  border: none;
  color: gray;
  border: 1px solid #969696ba;
  background-color: #f0ffff;
  height: 20px;
  padding: 10px;
  border-radius:5px;
  font-size: 18px;
  margin-inline: 10px;
  
  &:hover,:focus{
  box-shadow: 0px 0px 5px 1px #06d6d6dc;
  outline:none;
}
`;
const RadioButtons = styled.div`
display: flex;
align-items:flex-start;
margin-top: 15px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 15px;
  width:80%;

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
const NewUser = () => {
  const [user, setUser] = useState({});
  const handleChange = (e)=>{
    setUser((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }
  const dispatch = useDispatch()
  const handleSubmit = ()=>{
    addUser(user,dispatch)
  }
  return (
   <Container>
       <MainTitle>New User</MainTitle>
       <Wrapper>
           <Form>
               <InputItem>
           <Label>Username</Label>
              <Input type="text" name="username" onChange={handleChange}></Input>
               </InputItem>
               <InputItem>
              <Label>Full Name</Label>
              <Input type="text" name="fullname" onChange={handleChange}></Input>
               </InputItem>
               <InputItem>
              <Label>Email</Label>
              <Input type="email" name="email" onChange={handleChange}></Input>
               </InputItem>
               <InputItem>
              <Label>phone</Label>
              <Input type="number" name="phone" onChange={handleChange}></Input>
               </InputItem>
               <InputItem>
              <Label>Address</Label>
              <Input type="text" name="address" onChange={handleChange}></Input>
               </InputItem>
               <InputItem>
              <Label>Gender</Label>
              <RadioButtons>

              <Input type="radio" name='gender' id='male' value="male" onChange={handleChange}></Input>
              <Label id='male'>Male</Label>
              <Input type="radio" name='gender' id='female' value="female" onChange={handleChange}></Input>
              <Label id='female'>Female</Label>
              <Input type="radio" name='gender' id='other' value="other" onChange={handleChange}></Input>
              <Label id='other'>Other</Label>

              </RadioButtons>
               </InputItem>
           </Form>
           <ButtonContainer>
                <Button onClick={handleSubmit}>Create</Button>
              </ButtonContainer>
       </Wrapper>
   </Container>
  )
}

export default NewUser