import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addUser } from '../redux/apiCalls';
import app from "../Firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

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
const inputContainer = styled.div`
  `
const Form = styled.form`
  
  display:flex ;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  flex: 1;
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
const UserEditImg = styled.div`
  display: flex;
  flex:1;
  flex: 2;
  flex-direction: column;
  align-items: center;
  padding-left: 10px;

  justify-content: space-around;
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
`; const UploadImg = styled.img`
width: 200px;
height: auto;
border-radius: 10px;
cursor: pointer;
z-index: 1;
`; const HeaderButton = styled.button`
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
  const [updatedImage, setUpdatedImage] = useState("/images/photo-upload-icon-picture-flat-260nw-1918146320.jpg")
  const [file, setFile] = useState([]);

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
        // if (progress!=100) return (<HeaderButton disabled>uploading</HeaderButton>)
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

          addUser({
            ...user,

            img: downloadURL,

          }, dispatch)
        });
      }
    );


  }
  return (
    <Container>
      <MainTitle>New User</MainTitle>
      <Wrapper>
        <Form>
          <inputContainer>


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
          </inputContainer>
          <UserEditImg>
            <EditImg>
              <InfoImgHover>
                <Label htmlFor="file">
                  <ImgButton >select Image</ImgButton>
                </Label>
              </InfoImgHover>
              <UploadImg
                src={updatedImage}
                alt=""
              ></UploadImg>

              <Input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => { setUpdatedImage(URL.createObjectURL(e.target.files[0])); setFile(e.target.files[0]) }}
              ></Input>
            </EditImg>

            <ButtonContainer>
              <HeaderButton onClick={handleSubmit}>Update</HeaderButton>
            </ButtonContainer>
          </UserEditImg>
        </Form>

      </Wrapper>
    </Container>
  )
}

export default NewUser