import React from 'react'
import styled from 'styled-components'
const BottomContainer = styled.form`
flex: 1;
  padding: 15px 20px;
  `

const ProductInfo = styled.div`
 display: flex;
 align-items:center;
 margin-bottom:10px;`
const Img = styled.img`
 width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;`
const Title = styled.div`
 font-size: 24px;
  font-weight: 600;`
const ProductDetails = styled.div`
width:25%;
 display: flex;
 flex-direction:column ;
 margin:15px  15px 0 15px;
 `
const ProductKey = styled.h3`
font-size: 20px;
  color: gray;
  font-weight: 500;`
const ProductDetailItem = styled.div`
display: flex;
justify-content: space-between;
`
  



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
const HeaderButton = styled.button`
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

const Option =styled.option`
`
const AddProduct = () => {
  return (
    <BottomContainer>
    <UserEditContainer>
      <UserEditTitle>Edit</UserEditTitle>
      <UserEditWrapper>
        <UserEditInputs>
          <Label>Product Name</Label>
          <Input type="text" ></Input>
          <Label>Product Details</Label>
          <Input type="text" ></Input>
          <Label>Price</Label>
          <Input type="number" ></Input>
          <Label>Active</Label>
         <Select name='active' id='active' >
           <Option value="yes" selected>Yes</Option>
           <Option value="no">No</Option>
           </Select>
          <Label>In Stock</Label>
         <Select name='instock' id='instock' >
           <Option value="yes" selected>Yes</Option>
           <Option value="no" >No</Option>
           </Select>
          
        </UserEditInputs>
        <UserEditImg>
          <EditImg>
              
            <InfoImgHover>
              <Label htmlFor="file">
                <ImgButton>Upload Image</ImgButton>
              </Label>
            </InfoImgHover>
            <UploadImg src="/images/photo-upload-icon-picture-flat-260nw-1918146320.jpg" alt=""></UploadImg>

            <Input
              type="file"
              id="file"
              style={{ display: "none" }}
            ></Input>
          </EditImg>
          <ButtonContainer>
            <HeaderButton>Update</HeaderButton>
          </ButtonContainer>
          </UserEditImg>
          </UserEditWrapper>
        </UserEditContainer>

        </BottomContainer>
  )
}

export default AddProduct