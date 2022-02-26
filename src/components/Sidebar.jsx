import {
  Assessment,
  ChatBubble,
  CurrencyRupeeOutlined,
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
import React from "react";
import styled from "styled-components";

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
  font-size: 22px;
  color: #6e7474bb;
`;
const List = styled.ul`
  list-style: none;
  padding: 5px;
`;
const ListItem = styled.li`
  padding: 2.5px;
  
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 200;
  border-radius: 10px;
  background-color: ${(props) =>
    props.selection === "active" ? "#c5ffff" : ""};
  &:hover {
    background-color: #c5ffff;
  }
`;
export const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <ListItem selection="active">
              <Home style={{ fontSize: "22px", marginRight: "10px" }} />
              Home
            </ListItem>
            <ListItem>
              <Timeline style={{ fontSize: "22px", marginRight: "10px" }} />
              Analytics
            </ListItem>
            <ListItem>
              <TrendingUp style={{ fontSize: "22px", marginRight: "10px" }} />
              Sales
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <ListItem selection="">
              <PermIdentity style={{ fontSize: "22px", marginRight: "10px" }} />
              Users
            </ListItem>
            <ListItem>
              <LocalMall style={{ fontSize: "22px", marginRight: "10px" }} />
              Products
            </ListItem>
            <ListItem>
              <CurrencyRupeeSharp
                style={{ fontSize: "22px", marginRight: "10px" }}
              />
              Transactions
            </ListItem>
            <ListItem>
              <Assessment style={{ fontSize: "22px", marginRight: "10px" }} />
              Reports
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <ListItem selection="">
              <Email style={{ fontSize: "22px", marginRight: "10px" }} />
              Mail
            </ListItem>
            <ListItem>
              <DynamicFeed style={{ fontSize: "22px", marginRight: "10px" }} />
              Feedback
            </ListItem>
            <ListItem>
              <ChatBubble style={{ fontSize: "22px", marginRight: "10px" }} />
              Messages
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <ListItem selection="">
              <Work style={{ fontSize: "22px", marginRight: "10px" }} />
              Manage
            </ListItem>
            <ListItem>
              <Timeline style={{ fontSize: "22px", marginRight: "10px" }} />
              Analytics
            </ListItem>
            <ListItem>
              <Report style={{ fontSize: "22px", marginRight: "10px" }} />
              Reports
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};
