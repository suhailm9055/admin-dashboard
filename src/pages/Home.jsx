import React from 'react'
import styled from 'styled-components'
import Chart from '../components/Chart'
import FeaturedInfo from '../components/FeaturedInfo'
import  {WidgetLeft}  from '../components/WidgetLeft'
import {WidgetRight} from '../components/WidgetRight'
import { userData } from '../Data'


const Container =styled.div`
  display: flex;
  margin: 20px;
  padding: 0 10px;
  /* width: 90%; */


`
const Home = () => {
  return (
    <div>
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics"  grid dataKey="Active Users"/>
        
        <Container>

        
           <WidgetLeft />
         
          <WidgetRight />
        
        </Container>
        </div>

  )
}

export default Home