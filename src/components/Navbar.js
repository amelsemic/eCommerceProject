import React from 'react'
import classes from "./Navbar.module.css";
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Nav = () => {
  return <div className={classes.navBar} >
    <div className={classes.navCenter} >
      <div className={classes.navHeader}>
        <Link to="/" >
          <img src={logo} alt="comfy sloth" />
        </Link>
        <button type='button' className={classes.navToggle}>
          <FaBars />
        </button>
      </div>
      <ul className={classes.navLinks}>
        {links.map((link)=>{
          return <li key={link.id}>
            <Link to={link.url}>{link.text} </Link>
          </li>
        })}
      </ul>
      <CartButtons />
    </div>
  </div>
}

export default Nav;
