import React from 'react'
import Chart from '../components/Chart'
import FeaturedInfo from '../components/FeaturedInfo'
import { userData } from '../Data'
const Home = () => {
  return (
    <div>
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics"  grid dataKey="Active Users"/>
        </div>

  )
}

export default Home