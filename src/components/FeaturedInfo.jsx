import React, { useEffect } from "react";
import styled from "styled-components";
import {
  ArrowDownward,
  ArrowUpward,
  CurrencyRupee,
  CurrencyRupeeOutlined,
} from "@mui/icons-material";
import { userRequest } from "../requestMethods";
import { useState } from "react";

const Container = styled.div`
/* width: 90%; */
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
background: linear-gradient(#f4ffff,#c5fdfd5a);
box-shadow: 0px 0px 15px -10px #000000;
`;
const Title = styled.h2`
font-weight: bold;
  font-size: 23px;
  color: #6e7474;`;
const MoneyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
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
  color:${props=>props.trend==="up"?"#10b44f":"#eb4c4c"};


`;
const Subtitle = styled.p`

`
const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [percent, setPercent] = useState(0);

  useEffect(()=>{
    const getIncome = async ()=>{
      try{
          const res = await userRequest.get("orders/income");
          setIncome(res.data[1])
          setPercent((res.data[1].total*100) / res.data[0].total-100)

      }catch{}
    }
    getIncome()
  },[])
// console.log(income)
// console.log(percent)
  return (
    <Container>
      <Item>
        <Title> Revenue</Title>
        <MoneyContainer>
          <Money>
            <CurrencyRupeeOutlined /> {income.total}
          </Money>
          <MoneyRate trend="up">
            {Math.floor(percent)}%
           {percent>0?
          <ArrowUpward  style={{color:"#10b44f"}}/>:
          <ArrowDownward style={{color:"#eb4c4c"}}/>
          } 
             
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
