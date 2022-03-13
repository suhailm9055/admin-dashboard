import {
  Assessment,
  ChatBubble,
  CurrencyRupeeSharp,
  DynamicFeed,
  Email,
  Home,
  LocalMall,
  PermIdentity,
  Report,
  Timeline,
  TrendingUp,
  Work,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

import { Link, useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
const Container = styled.div`
  background-color: #f4ffff;
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
`;
const Wrapper = styled.div`
  padding: 5px 20px;
  color: #555;
`;
const Menu = styled.div`
  margin-bottom: 5px;
`;
const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  color: #6e7474bb;
`;
const List = styled.ul`
  list-style: none;
  padding: 2.5px;
`;
const ListItem = styled.li`
  padding: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  border-radius: 10px;
  background-color: ${(props) =>
    props.selection === "selected" ? "#c5ffff" : ""};
  &:hover {
    background-color: #c5ffff;
  }
`;
const IconSize = "18px";
const marginInline = "10px";

export const Sidebar = () => {
  const location = useLocation();

  const page = location.pathname.split("/")[1];
  const [selection1, setSelection1] = useState(page);
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              {selection1 === "" ? (
                <ListItem style={{ backgroundColor: "#c5ffff" }}>
                  {" "}
                  <Home
                    style={{ fontSize: IconSize, marginInline: marginInline }}
                  />
                  Home
                </ListItem>
              ) : (
                <ListItem onClick={() => setSelection1("")}>
                  <Home
                    style={{ fontSize: IconSize, marginInline: marginInline }}
                  />
                  Home
                </ListItem>
              )}
            </Link>

            <ListItem>
              <Timeline
                style={{ fontSize: IconSize, marginInline: marginInline }}
              />
              Analytics
            </ListItem>
            <ListItem>
              <TrendingUp
                style={{ fontSize: IconSize, marginInline: marginInline }}
              />
              Sales
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/users"
            >
              {selection1 === "users" ? (
                <ListItem style={{ backgroundColor: "#c5ffff" }}>
                  {" "}
                  <PermIdentity
                    style={{ fontSize: IconSize, marginInline: marginInline }}
                  />
                  Users
                </ListItem>
              ) : (
                <ListItem onClick={() => setSelection1("users")}>
                  <PermIdentity
                    style={{ fontSize: IconSize, marginInline: marginInline }}
                  />
                  Users
                </ListItem>
              )}
            </Link>
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/products"
            >
              {selection1 === ("products"||"product") ? (
                <ListItem style={{ backgroundColor: "#c5ffff" }}>
                  {" "}
                  <LocalMall
                    style={{ fontSize: IconSize, marginInline: marginInline }}
                  />
                  Products
                </ListItem>
              ) : (
                <ListItem onClick={() => setSelection1("products")}>
                  <LocalMall
                    style={{ fontSize: IconSize, marginInline: marginInline }}
                  />
                  Products
                </ListItem>
              )}
            </Link>

            <ListItem>
              <CurrencyRupeeSharp
                style={{ fontSize: IconSize, marginInline: marginInline }}
              />
              Transactions
            </ListItem>
            <ListItem>
              <Assessment
                style={{ fontSize: IconSize, marginInline: marginInline }}
              />
              Reports
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <ListItem selection="">
              <Email
                style={{ fontSize: IconSize, marginInline: marginInline }}
              />
              Mail
            </ListItem>
            <ListItem>
              <DynamicFeed
                style={{ fontSize: IconSize, marginInline: marginInline }}
              />
              Feedback
            </ListItem>
            <ListItem>
              <ChatBubble
                style={{ fontSize: IconSize, marginInline: marginInline }}
              />
              Messages
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <ListItem selection="">
              <Work
                style={{ fontSize: IconSize, marginInline: marginInline }}
              />
              Manage
            </ListItem>
            <ListItem>
              <Timeline
                style={{ fontSize: IconSize, marginInline: marginInline }}
              />
              Analytics
            </ListItem>
            <ListItem>
              <Report
                style={{ fontSize: IconSize, marginInline: marginInline }}
              />
              Reports
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};

// {/* <ListItem>
//     <MenuItem selected="users" onClick={() => setSelection1("null")}/>
//   </ListItem>
//   <ListItem>
//     <MenuItem selected="home" onClick={() => setSelection1("null")}/>
//   </ListItem>
