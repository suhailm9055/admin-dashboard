import { Visibility } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 1px;
  width: 100%; */
  flex: 2;
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
  margin: 5px 0 5px 10px;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
`;
const UserDetails = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  margin-right: 20px;
`;
const UserName = styled.span`
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
  min-width:100%;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background-color:${props=>props.status==="Approved" ?"#d1ffe8":props=>props.status==="Declined"?"#ffc6c6":"#b9ddff"} ;
  color: ${props=>props.status==="Approved" ?"#23a765":props=>props.status==="Declined"?"#b32626":"#206aaf"} ;
  padding: 1px 2px;
  font-size: 18px;

  /* &:hover {
    background-color: #c5ffff;
    color: #1f1f1f;
    cursor: pointer;
  } */
`;

const ButtonText = styled.p`
  font-size: 18px;
  padding-top: 2px;
  padding-right: 5px;
`;
const TableContainer = styled.table`
width: 100%;
border-spacing:20px;
`;
const TableRow = styled.tr`
`
const TableHead = styled.th`
text-align:left;`;
const TableDesc = styled.td`
font-weight: 300;
`;

export const WidgetRight = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Latest Transactions</Title>
        <TableContainer>

        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
        <TableRow>
          <TableDesc>
          <UserContainer>

            <Img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Img>

            <UserName>Alfreds Futterkiste</UserName>
          </UserContainer>
          </TableDesc>
          <TableDesc>20 feb 22</TableDesc>
          <TableDesc>200 QAR</TableDesc>
          <TableDesc><Button status="Approved">Approved</Button></TableDesc>
        </TableRow>
        <TableRow>
          <TableDesc>
            <UserContainer>
              
            <Img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Img>

            <UserName>Alfreds Futterkiste</UserName>
            </UserContainer>
          </TableDesc>
          <TableDesc>20 feb 22</TableDesc>
          <TableDesc>200 QAR</TableDesc>
          <TableDesc><Button status="Declined">Declined</Button></TableDesc>
        </TableRow>
        <TableRow>
          <TableDesc>
          <UserContainer>

            <Img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Img>

            <UserName>Alfreds Futterkiste</UserName>
          </UserContainer>
          </TableDesc>
          <TableDesc>20 feb 22</TableDesc>
          <TableDesc>200 QAR</TableDesc>
          <TableDesc><Button status="">Pending</Button></TableDesc>
        </TableRow>
        </TableContainer>
        
      </Wrapper>
    </Container>
  );
};
