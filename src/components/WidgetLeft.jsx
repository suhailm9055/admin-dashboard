import { Visibility } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { userRequest } from "../../src/requestMethods";

const Container = styled.div`
  /* display: flex;
  
  align-items: center;
  flex-direction: column;
  padding: 5px 1px; */
  flex: 1;
  margin-right: 10px;
`;

const Wrapper = styled.div`
  /* margin: 5px 5px 5px 29px; */
  padding: 15px 20px;
  border-radius: 10px;

  background: linear-gradient(#f4ffff, #c5fdfd5a);
  box-shadow: 0px 0px 15px -10px #000000;
`;
const Title = styled.h3`
  font-weight: bold;
  font-size: 23px;
  color: #6e7474;
`;
const UserList = styled.ul`

`
const UserContainerLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 15px;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
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
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background-color: #d3f8f8;
  color: #555;
  padding: 5px 10px;

  &:hover {
    background-color: #c5ffff;
    color: #1f1f1f;
    cursor: pointer;
  }
`;

const ButtonText = styled.p`
  font-size: 15px;
  padding-top: 2px;
  padding-right: 5px;
`;

const IconSize = "17px";
const marginRight = "10px";
export const WidgetLeft = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("/users");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  

  return (
    <Container>
      <Wrapper>
        <Title>New Members</Title>
        <UserList>
          {users.map(user=>(

        <UserContainerLi  key={user._id}>
          <Img src={user.img || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}></Img>
          <UserDetails>
            <UserName>{user.username}</UserName>
            {/* <UserTitle>Photographer</UserTitle> */}
            {console.log(user)}
          </UserDetails>
          <Button>
            <Visibility
              style={{ fontSize: IconSize, marginRight: marginRight }}
              />
            <ButtonText>Display</ButtonText>{" "}
          </Button>
        </UserContainerLi>
          ))}

       
              </UserList>
      </Wrapper>
    </Container>
  );
};