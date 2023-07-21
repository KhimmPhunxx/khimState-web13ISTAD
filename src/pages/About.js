import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
  return (
   
    <>
        <div>About Us Page</div>
        <NavLink 
                to="/about-us"
                className={({ isActive , isPending}) => 
                isPending 
            }
        >

        </NavLink>
    </>

  )
}
