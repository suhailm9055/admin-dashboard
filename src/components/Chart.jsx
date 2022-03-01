import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;
const Item = styled.div`
  flex: 1;
  margin: 5px 20px;
  padding: 25px 50px;
  border-radius: 10px;
  cursor: pointer;
  background: linear-gradient(#f4ffff, #c5fdfd5a);
  box-shadow: 0px 0px 15px -10px #000000;
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 23px;
  color: #6e7474;
`;


const Chart = ({data,title,dataKey,grid}) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" />

            <Line type="monotone" dataKey={dataKey} stroke="#6e7474" />
            <Tooltip />
            {grid && < CartesianGrid stroke="#adadad53" strokeDasharray="5 5"/>}
          </LineChart>
        </ResponsiveContainer>
      </Item>
    </Container>
  );
};

export default Chart;
