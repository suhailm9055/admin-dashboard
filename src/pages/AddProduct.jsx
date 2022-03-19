import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import app from "../Firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addProduct } from "../redux/apiCalls";

const BottomContainer = styled.form`
  flex: 1;
  padding: 15px 20px;
`;

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
  font-size: 18px;
`;
const Input = styled.input`
  border: none;
  color: gray;
  border-bottom: 1px solid #969696ba;
  background-color: #f0ffff;
  height: 20px;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  &:hover,
  :focus {
    box-shadow: 0px 6px 22px -10px #06d6d6dc;
    outline: none;
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
const Select = styled.select`
  border: none;
  color: gray;
  background-color: #f0ffff;
  border-bottom: 1px solid #969696ba;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  &:hover:focus {
    box-shadow: 0px 6px 22px -10px #06d6d6dc;
    outline: none;
  }
`;
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

const Option = styled.option``;
const AddProduct = () => {
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState([]);
  const [file, setFile] = useState([]);
  const [inStock, setInStock] = useState("true");
  const [updatedImage, setUpdatedImage] = useState("/images/photo-upload-icon-picture-flat-260nw-1918146320.jpg")
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    e.preventDefault();
    setCat(e.target.value.split(","));
  };
  // const [product,setProduct]=useState({inputs,categories:cat,img:file})

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
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            inStock,
            img: downloadURL,
            categories: cat,
          };

          addProduct(product, dispatch)
        });
      }
    );
  };

  return (
    <BottomContainer>
      <UserEditContainer>
        <UserEditTitle>Edit</UserEditTitle>
        <UserEditWrapper>
          <UserEditInputs>
            <Label>Product Name</Label>
            <Input type="text" name="title" onChange={handleChange}></Input>
            <Label>Product Details</Label>
            <Input type="text" name="desc" onChange={handleChange}></Input>
            <Label>Price</Label>
            <Input type="number" name="price" onChange={handleChange}></Input>
            <Label>Categories</Label>
            <Input type="text" name="categories" onChange={handleCat}></Input>

            <Label>In Stock</Label>
            <Select
              name="inStock"
              id="inStock"
              onChange={(e) => setInStock(e.target.value)}
            >
              <Option value="true" selected>
                Yes
              </Option>
              <Option value="false">No</Option>
            </Select>
          </UserEditInputs>
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
        </UserEditWrapper>
      </UserEditContainer>
    </BottomContainer>
  );
};

export default AddProduct;
