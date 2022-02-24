import React from "react";
import styled from "styled-components";
import { Notifications,Language,Settings, Person } from "@mui/icons-material";
const Container = styled.div`
  background-color: #e4e4e4;
  width: 100%;
`;
const Wrapper = styled.div`
  padding: 5px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
`;
const Left = styled.div``;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555555ba;
`;
const IconContainer = styled.div`
position: relative;
margin-right:15px;
cursor: pointer;
  &:hover {
    color: #020202;
  }
`;
const BadgeSpan = styled.p`
position: absolute;
width: 13px;
height: 13px;
    top:-2px;
    left:10px;
    color:white;
    background-color:${props=>props.color==="red" ?"#ff0000 ":"#003cff"} ;
    border-radius: 50%;
    font-size: 14px;
    font-weight: 100;
    display: flex;
    align-items:center;
    justify-content: center;
    
`

const Topbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo>QatarRing.admin</Logo>
          </Left>
          <Right>
            <IconContainer>
              <Notifications />
              <BadgeSpan color="red"><p>4</p></BadgeSpan>
            </IconContainer>
            <IconContainer>
                
              <Language />
              <BadgeSpan><p>2</p></BadgeSpan>

            </IconContainer>
            <IconContainer>
              <Settings />
              
            </IconContainer>
            <IconContainer>
              <Person />
              <BadgeSpan><p>2</p></BadgeSpan>
              
            </IconContainer>
            
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Topbar;
