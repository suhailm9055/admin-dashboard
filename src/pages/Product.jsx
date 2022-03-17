import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Chart from '../components/Chart'
import { getProducts, updateProduct } from '../redux/apiCalls'
import { userRequest } from '../requestMethods'


const Container = styled.div``
const HeaderContainer = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;`
const HeaderTitle = styled.h1`
font-size: 24px;
  padding-top: 2px;
  padding-right: 5px;`
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
const Wrapper = styled.div`

  padding: 10px;`
const TopContainer = styled.div`
display: flex;

  `
const LeftContainer = styled.div`
flex: 1;

 
`
const RightContainer = styled.div`
flex: 1;
margin:10px;
width:75%;
  padding: 15px 35px;
  border-radius: 10px;

  background: linear-gradient(#f4ffff, #c5fdfd5a);
  box-shadow: 0px 0px 15px -10px #000000;`
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
  

const ProductDesc = styled.h3`
font-size: 20px;
  color: gray;
  font-weight: 300;`

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
const Product = () => {

  const [pStats,setPStats]= useState([])

  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector(state=>state.product.products.find(product=>product._id===productId))
  const MONTH = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/orders/income?pid="+productId);
        const list = res.data.sort((a,b)=>{
          return a._id - b._id;
        })
        list.map(item=>( 

          
          setPStats((prev)=>(
            [
              ...prev,
              {name:MONTH[item._id-1],"Sales":item.total}
            ]))
            ))
          } catch {}
        };
        getStats();
      },[MONTH]);
      const dispatch = useDispatch()
      const [productUpdate,setProductUpdate]=useState(product);
      useEffect(()=>{
        getProducts(dispatch)
      },[dispatch])
const handleChange=(e)=>{
setProductUpdate(prev=>{
  return {...prev,[e.target.name]:e.target.value}})
}
console.log(productUpdate)
const handleUpdate=(e)=>{
  e.preventDefault()
  getProducts(dispatch)
  updateProduct(productId,productUpdate,dispatch)
}

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Product</HeaderTitle>
        <Link to="/addproduct">
        <HeaderButton>Add New Product</HeaderButton>
        </Link>

      </HeaderContainer>
      <Wrapper>
        <TopContainer>
          <LeftContainer>
            <Chart data={pStats} title="Sales Performance" dataKey="Sales"/>
          </LeftContainer>
          <RightContainer>
            <ProductInfo>
              <Img src={productUpdate.img}/>
              <Title>{productUpdate.title}</Title>
            </ProductInfo>
            <ProductDetails>
              <ProductDetailItem>

              <ProductKey>Id:</ProductKey>
              <ProductDesc>{productUpdate._id}</ProductDesc>
              </ProductDetailItem>
              <ProductDetailItem>

              <ProductKey>Sales:</ProductKey>
              <ProductDesc>4254</ProductDesc>
              </ProductDetailItem>
              
              <ProductDetailItem>

              <ProductKey>In Stock:</ProductKey>
              <ProductDesc>{product.inStock?"Yes":"No"}</ProductDesc>
              </ProductDetailItem>
            </ProductDetails>
          </RightContainer>
        </TopContainer>
        <BottomContainer>
        <UserEditContainer>
          <UserEditTitle>Edit</UserEditTitle>
          <UserEditWrapper>
            <UserEditInputs>
              <Label>Product Name</Label>
              <Input type="text" placeholder={productUpdate.title} name="title" onChange={handleChange}></Input>
              <Label>Product Details</Label>
              <Input type="text" placeholder={productUpdate.desc} name="desc"  onChange={handleChange}></Input>
              <Label>Price</Label>
              <Input type="number" placeholder={productUpdate.price} name="price" onChange={handleChange}></Input>
              
             
              <Label>In Stock</Label>
              {productUpdate.inStock ? <Select name="inStock" id='inStock' onChange={handleChange}>
               <Option value="true" selected>yes</Option>
               <Option value="false" >no</Option>
               </Select>
               :
               <Select name="inStock" id='inStock' onChange={handleChange}>
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
                <UploadImg src={productUpdate.img}></UploadImg>

                <Input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                ></Input>
              </EditImg>
              <ButtonContainer>
                <HeaderButton onClick={handleUpdate}>Update</HeaderButton>
              </ButtonContainer>
            </UserEditImg>
          </UserEditWrapper>
        </UserEditContainer>

        </BottomContainer>
      </Wrapper>
    </Container>
  )
}

export default Product