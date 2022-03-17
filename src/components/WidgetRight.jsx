import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { format } from "timeago.js";
import { userRequest } from "../requestMethods";

const Container = styled.div`
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
// const Img = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   margin-right: 20px;
//   object-fit: cover;
// `;
// const UserDetails = styled.div`
//   display: flex;
//   align-items: stretch;
//   flex-direction: column;
//   margin-right: 20px;
// `;
const UserName = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
// const UserTitle = styled.h5`
//   font-size: 15px;
//   color: gray;
//   height: 20px;
// `;
const Button = styled.button`
  display: flex;
  min-width: 100%;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background-color: ${(props) =>
    props.status === "approved"
      ? "#d1ffe8"
      : (props) => (props.status === "declined" ? "#ffc6c6" : "#b9ddff")};
  color: ${(props) =>
    props.status === "approved"
      ? "#23a765"
      : (props) => (props.status === "declined" ? "#b32626" : "#206aaf")};
  padding: 1px 2px;
  font-size: 18px;

  /* &:hover {
    background-color: #c5ffff;
    color: #1f1f1f;
    cursor: pointer;
  } */
`;

// const ButtonText = styled.p`
//   font-size: 18px;
//   padding-top: 2px;
//   padding-right: 5px;
// `;
const TableContainer = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
const TableRow = styled.tr``;
const TableHead = styled.th`
  text-align: left;
`;
const TableDesc = styled.td`
  font-weight: 300;
`;
const TableBody = styled.tbody`
`;

export const WidgetRight = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders/all");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

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

          {orders.map((order) => (
            <TableBody key={order._id}>

            <TableRow >
              <TableDesc>
                <UserContainer>
                  {/* <Img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Img> */}

                  <UserName>{order.userId}</UserName>
                </UserContainer>
              </TableDesc>
              <TableDesc>{format(order.createdAt)}</TableDesc>
              <TableDesc>{order.amount} QAR</TableDesc>
              <TableDesc>
                <Button status={order.status}>{order.status}</Button>
              </TableDesc>
            </TableRow>
            </TableBody>
          ))}
        </TableContainer>
      </Wrapper>
    </Container>
  );
};
