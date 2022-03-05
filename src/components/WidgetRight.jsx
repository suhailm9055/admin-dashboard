import { Visibility } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 1px;
  width: 100%; */
  flex:2;
  `;

const Wrapper = styled.div`

 
  /* margin: 5px 29px 5px 5px; */
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


export const WidgetRight = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Latest Transactions</Title>
        <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
      </Wrapper>
    </Container>
  );
};
