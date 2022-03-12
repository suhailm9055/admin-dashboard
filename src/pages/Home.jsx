import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import styled from "styled-components";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import { WidgetLeft } from "../components/WidgetLeft";
import { WidgetRight } from "../components/WidgetRight";
import { userData, userRows } from "../Data";
import {  userRequest } from "../requestMethods";

const Container = styled.div`
  display: flex;
  margin: 20px;
  padding: 0 10px;
  /* width: 90%; */
`;
const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTH = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getUserStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map(item=>( 

          
          setUserStats((prev)=>(
            [
              ...prev,
              {"id":item._id,name:MONTH[item._id-1],"Active Users":item.total}
            ]))
            ))
          } catch {}
        };
        getUserStats();
      },[MONTH]);
      
      
        
// console.log(userStats);

  return (
    <div>
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active Users"
      />

      <Container>
        <WidgetLeft />

        <WidgetRight />
      </Container>
    </div>
  );
};

export default Home;
