import React from "react";
import styled from "styled-components";
import { Notifications, Language, Settings, Person } from "@mui/icons-material";
import UserDropMenu from "./UserDropMenu";
const Container = styled.div`
  background-color: #f4ffff;
  width: 100%;
  height: 50px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    color: #4d4b4b;
    transform:scale(1.1)
  }
`;
const BadgeSpan = styled.p`
  position: absolute;
  width: 13px;
  height: 13px;
  top: -2px;
  left: 10px;
  color: white;
  background-color: ${(props) =>
    props.color === "red" ? "#ea2f2f" : "#0b7acb"};
  border-radius: 50%;
  font-size: 14px;
  font-weight: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left >
          <Logo>e-Shop.admin</Logo>
        </Left>
        <Right>
          {/* <IconContainer>
            <Notifications />
            <BadgeSpan color="red">
              <p>4</p>
            </BadgeSpan>
          </IconContainer> */}
          {/* <IconContainer>
            <Language />
            <BadgeSpan>
              <p>2</p>
            </BadgeSpan>
          </IconContainer> */}
          {/* <IconContainer>
            <Settings />
          </IconContainer> */}
          <IconContainer>
            <UserDropMenu/>
            
          </IconContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
