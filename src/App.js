import Topbar from "./components/Topbar";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UsersList from "./pages/UsersList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import Products from "./pages/Products";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";

const MainContainer = styled.div``;
const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;
const BodyContainer = styled.div`
  display: flex;
  align-items: "center";
`;
const SidebarContainer = styled.div`
  flex: 1;
`;
const PagesContainer = styled.div`
  margin-top: 10px;
  flex: 5;
`;

function App() {
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  const admin = currentUser?.isAdmin;
    return (
    <Router>
        <Switch>
         <Route path="/login">
            <Login />
          </Route>

      {admin && 
      <>
        <MainContainer>
          
            <HeaderContainer>
              <Topbar />
            </HeaderContainer>
            <BodyContainer>
              <SidebarContainer>
                <Sidebar />
              </SidebarContainer>
              <PagesContainer>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/users">
                  <UsersList />
                </Route>
                <Route path="/user/:UserId">
                  <User />
                </Route>
                <Route path="/adduser">
                  <NewUser />
                </Route>
                <Route path="/products">
                  <Products />
                </Route>
                <Route path="/product/:productId">
                  <Product />
                </Route>
                <Route path="/addproduct">
                  <AddProduct />
                </Route>
              </PagesContainer>
            </BodyContainer>
        
      </MainContainer>
      </>
      } 
        </Switch>
    </Router>
  );
}

export default App;
