import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [menu,setMenu] = useState("Home");  //underline effect for current state

  return (
    <div className='navbar'>
        <img src={assets.logo1} alt="" className="logo" />
        <ul className="navbar-menu">
          <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
          <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Products</a>
          {/* <a href='#xplore-menu' onClick={()=>setMenu("Categories")} className={menu==="Categories"?"active":""}>Categories</a> */}
          <a href='#footer' onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</a>
        </ul>

    </div>
  )
}

export default Navbar
