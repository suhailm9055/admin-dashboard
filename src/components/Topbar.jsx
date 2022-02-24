import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
background-color: #e4e4e4;

width:100%;
`
const Wrapper = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
 width:100%;
 margin:auto;
`
const Left = styled.div`
    
    `
const Right = styled.div`

    
`


const Topbar = () => {
  return (
    <>
    
    <Container>

    <Wrapper>
        <Left>
            <h1>left</h1>
           
        </Left>
        <Right>
           
            <h1>right</h1>
        </Right>
    </Wrapper>
    </Container>
   
    </>
    
  )
}

export default Topbar;