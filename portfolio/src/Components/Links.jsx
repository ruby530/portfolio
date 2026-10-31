import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
  return (
    <>
        <div className="links">
            <li><NavLink to='/'>home</NavLink></li>
            <li></li>
        </div>
    </>
  )
}

export default Links
