import React from 'react'
import LeftSide from '../../components/leftSide/LeftSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
      <LeftSide/>
      <div className="center">Center</div>
      <div className="rightSide">RightSide</div>
    </div>
  )
}

export default Home
