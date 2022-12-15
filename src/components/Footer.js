import React from 'react'
import classes from "./Footer.module.css"
const Footer = () => {
  return <div className={classes.wrapper} >
  <h5>
    &copy; 
    {new Date().getFullYear()}
    <span> Shopperly </span>
    All rights reserved
  </h5>
</div >
}

export default Footer
