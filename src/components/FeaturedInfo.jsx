import React from "react";
import styled from "styled-components";
import {
  ArrowUpward,
  CurrencyRupee,
  CurrencyRupeeOutlined,
} from "@mui/icons-material";

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding:5px 10px;
`;
const Item = styled.div`
flex: 1;
margin: 0px 20px;
padding: 30px;
border-radius:10px;
cursor: pointer;
box-shadow: 0px 0px 15px -10px #222222;
`;
const Title = styled.h2`
font-weight:500;`;
const MoneyContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Money = styled.h1``;
const MoneyRate = styled.h4`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-weight:500;


`;

const FeaturedInfo = () => {
  return (
    <Container>
      <Item>
        <Title> Revenue</Title>
        <MoneyContainer>
          <Money>
            <CurrencyRupeeOutlined /> 2,458{" "}
          </Money>
          <MoneyRate>
            +2.14
            <ArrowUpward />
          </MoneyRate>
        </MoneyContainer>
      </Item>
      <Item>
        <Title> Revenue</Title>
        <MoneyContainer>
          <Money>
            <CurrencyRupeeOutlined /> 2,458{" "}
          </Money>
          <MoneyRate>
            {" "}
            +2.14
            <ArrowUpward />
          </MoneyRate>
        </MoneyContainer>
      </Item>
      <Item>
        <Title> Revenue</Title>
        <MoneyContainer>
          <Money>
            <CurrencyRupeeOutlined /> 2,458{" "}
          </Money>
          <MoneyRate>
            {" "}
            +2.14
            <ArrowUpward />
          </MoneyRate>
        </MoneyContainer>
      </Item>
    </Container>
  );
};

export default FeaturedInfo;
