
import React from 'react'
import { Link } from 'react-router-dom';
import style from "./Home.module.css"
const Home = () => {
  return (
    <div className={style.container} >
      <div>
         <h1>Welcome to Notes App</h1>
      </div>
      <div>
       <Link to="/notes">Go to Notes</Link>
      </div>
</div>
  )
}

export default Home