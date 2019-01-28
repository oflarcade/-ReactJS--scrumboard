import React from 'react';
import { NavLink } from 'react-router-dom'

 const SignOutLinks = () => {
     return(
         <ul className="hide-on-med-and-down right">
            <li><NavLink to='/signup'>Signup</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
         </ul>
     )
 }

 export default SignOutLinks;