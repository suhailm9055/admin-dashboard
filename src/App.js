import Topbar from "./components/Topbar";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UsersList from "./pages/UsersList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import Products from "./pages/Products";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Login from "./pages/Login";
import { Redirect } from "react-router-dom";

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
          {admin ? <Redirect to="/" /> : <Login />}

        </Route>

        
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
                    {admin ? <Home /> : <Redirect to="/login" />}

                  </Route>
                  <Route path="/users">
                  {admin ? <UsersList /> : <Redirect to="/login" />}
                    
                  </Route>
                  <Route path="/user/:UserId">
                  {admin ? <User /> : <Redirect to="/login" />}

                  </Route>
                  <Route path="/adduser">
                  {admin ? <NewUser /> : <Redirect to="/login" />}

                  </Route>
                  <Route path="/products">
                  {admin ? <Products /> : <Redirect to="/login" />}

                  </Route>
                  <Route path="/product/:productId">
                  {admin ? <Product /> : <Redirect to="/login" />}

                  </Route>
                  <Route path="/addproduct">
                  {admin ? <AddProduct /> : <Redirect to="/login" />}

                  </Route>
                </PagesContainer>
              </BodyContainer>

            </MainContainer>
          </>
        
      </Switch>
    </Router>
  );
}

export default App;
