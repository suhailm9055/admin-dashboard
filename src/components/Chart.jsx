import React from 'react'
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Container = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
padding:5px 10px;
`;
const Item = styled.div`
flex: 1;
margin: 5px 20px;
padding: 25px 50px;
border-radius:10px;
cursor: pointer;
background: linear-gradient(#f4ffff,#c5fdfd5a);
box-shadow: 0px 0px 15px -10px #000000;
`;
const Title = styled.h2`
font-weight:500;`;
const MoneyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
const Chart = () => {
  return (
    <Container>
        <Item>
            <Title>Sales Analytics </Title>
            <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
            <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
       
            </LineChart>
            </ResponsiveContainer>
        </Item>
    </Container>
  )
}

export default Chart