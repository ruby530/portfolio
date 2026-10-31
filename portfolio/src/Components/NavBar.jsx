import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image from '../assets/Self image.jpg'
const NavBar = () => {
  let navigate=useNavigate()
  let [bool,setBool]=useState(true)
  let handledetails=()=>{
    setBool(!bool)
  }
  return (
   <>
      <div className="navbar">
        <img src={image} alt="no image" />
        <div className="content">
          <h1>RUDRAKSHI OALAKERI</h1>
          <li onClick={()=>navigate(`/education`)}>EDUCATION</li>
          <li onClick={()=>navigate(`/skills`)}>SKILLS</li>
          <li onClick={handledetails}>
            Contact Details
          </li>
          {bool?"":
           <>
             <p>email:<span style={{color:"blue"}}>rudrakshiolakeri@gmail.com</span></p>
             <p>ph.no:7349121813</p>
             <p>place:Belagavi,Karnataka</p>
           </>
          }
        </div>
      </div>
   </>
  )
}

export default NavBar
