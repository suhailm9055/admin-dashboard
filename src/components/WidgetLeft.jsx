import { Visibility } from "@mui/icons-material";
import { fontSize, height } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 10px;
`;

const Wrapper = styled.div`
  flex: 1;
  margin: 5px 20px;
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
const UserContainer = styled.div`
  display: flex;
  align-items: center;
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
  font-size: 18px;
  padding-top: 2px;
  padding-right: 5px;
`;


export const WidgetLeft = () => {
  return (
    <Container>
      <Wrapper>
        <Title>New Members</Title>
        <UserContainer>
          <Img src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Img>
          <UserDetails>
            <UserName>Murat Esibatir</UserName>
            <UserTitle>Photographer</UserTitle>
          </UserDetails>
          <Button>
            <Visibility style={{ fontSize: "20px", marginRight: "10px" }} />
            <ButtonText>Display</ButtonText>{" "}
          </Button>
        </UserContainer>
        
        <UserContainer>
          <Img src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Img>
          <UserDetails>
            <UserName>Murat Esibatir</UserName>
            <UserTitle>Photographer</UserTitle>
          </UserDetails>
          <Button>
            <Visibility style={{ fontSize: "20px", marginRight: "10px" }} />
            <ButtonText>Display</ButtonText>{" "}
          </Button>
        </UserContainer>
        <UserContainer>
          <Img src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Img>
          <UserDetails>
            <UserName>Murat Esibatir</UserName>
            <UserTitle>Photographer</UserTitle>
          </UserDetails>
          <Button>
            <Visibility style={{ fontSize: "20px", marginRight: "10px" }} />
            <ButtonText>Display</ButtonText>{" "}
          </Button>
        </UserContainer>
        <UserContainer>
          <Img src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Img>
          <UserDetails>
            <UserName>Murat Esibatir</UserName>
            <UserTitle>Photographer</UserTitle>
          </UserDetails>
          <Button>
            <Visibility style={{ fontSize: "20px", marginRight: "10px" }} />
            <ButtonText>Display</ButtonText>{" "}
          </Button>
        </UserContainer>
        <UserContainer>
          <Img src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Img>
          <UserDetails>
            <UserName>Murat Esibatir</UserName>
            <UserTitle>Photographer</UserTitle>
          </UserDetails>
          <Button>
            <Visibility style={{ fontSize: "20px", marginRight: "10px" }} />
            <ButtonText>Display</ButtonText>{" "}
          </Button>
        </UserContainer>
      </Wrapper>
    </Container>
  );
};
