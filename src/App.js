import Topbar from "./components/Topbar";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import Home from "./pages/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UsersList from "./pages/UsersList";

const MainContainer = styled.div`

`;
const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  `;
const BodyContainer = styled.div`
display: flex;
align-items : 'center';

`;
const SidebarContainer = styled.div`
flex:1;
`;
const PagesContainer = styled.div`
margin-top: 10px;
flex:5;`;

function App() {
  return (
    <Router>

    <MainContainer>
      <HeaderContainer>
        <Topbar />
      </HeaderContainer>
      <BodyContainer>
        <SidebarContainer>
          <Sidebar />
         
        </SidebarContainer>
        <PagesContainer>
        <Switch>

        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UsersList />
          </Route>
        </Switch>
        </PagesContainer>
      </BodyContainer>
    </MainContainer>
    </Router>
  );
}

export default App;
