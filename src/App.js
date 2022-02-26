import Topbar from "./components/Topbar";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import Home from "./components/pages/Home";

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
flex:4;`;

function App() {
  return (
    <MainContainer>
      <HeaderContainer>
        <Topbar />
      </HeaderContainer>
      <BodyContainer>
        <SidebarContainer>
          <Sidebar />
         
        </SidebarContainer>
        <PagesContainer>
          <Home />
        </PagesContainer>
      </BodyContainer>
    </MainContainer>
  );
}

export default App;
