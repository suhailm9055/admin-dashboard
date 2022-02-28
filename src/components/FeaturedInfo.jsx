import React from "react";
import styled from "styled-components";
import {
  ArrowDownward,
  ArrowUpward,
  CurrencyRupee,
  CurrencyRupeeOutlined,
} from "@mui/icons-material";

const Container = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
padding:5px 10px;
`;
const Item = styled.div`
flex: 1;
margin: 5px 20px;
padding: 25px 50px;
border-radius:10px;
cursor: pointer;
background: linear-gradient(#f4ffff,#c5fdfd5a);
box-shadow: 0px 0px 15px -10px #000000;
`;
const Title = styled.h2`
font-weight:500;`;
const MoneyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Money = styled.h1`
 display: flex;
  align-items: center;
  `;
const MoneyRate = styled.h4`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 30px;
  font-weight:500;
  color:${props=>props.trend==="up"?"green":"red"};


`;
const Subtitle = styled.p`
font-size: 15px;
color:gray;
`
const FeaturedInfo = () => {
  return (
    <Container>
      <Item>
        <Title> Revenue</Title>
        <MoneyContainer>
          <Money>
            <CurrencyRupeeOutlined /> 2,458{" "}
          </Money>
          <MoneyRate trend="up">
            +2.14
            <ArrowUpward />
          </MoneyRate>
        </MoneyContainer>
        <Subtitle>
          Compared to last month
        </Subtitle>
      </Item>
      <Item>
        <Title> Sales</Title>
        <MoneyContainer>
          <Money>
            <CurrencyRupeeOutlined /> 258{" "}
          </Money>
          <MoneyRate>
            {" "}
            -1.14
            <ArrowDownward />
          </MoneyRate>
        </MoneyContainer>
        <Subtitle>
          Compared to last month
        </Subtitle>
      </Item>
      <Item>
        <Title> Cost</Title>
        <MoneyContainer>
          <Money>
            <CurrencyRupeeOutlined /> 458{" "}
          </Money>
          <MoneyRate trend="up">
            {" "}
            +1.14
            <ArrowUpward />
          </MoneyRate>
        </MoneyContainer>
        <Subtitle>
          Compared to last month
        </Subtitle>
      </Item>
    </Container>
  );
};

export default FeaturedInfo;
