

import { Link } from "react-router-dom";

import React from 'react'
import "./Heager.css"

const Header = () => {
  return (
    <div  className="header">
        <Link to="/">
            <h2>Home</h2>
        </Link>
        <Link to="/notes">
            <h2>AddNotes </h2>
        </Link>
       
    </div>
  )
}

export default Header