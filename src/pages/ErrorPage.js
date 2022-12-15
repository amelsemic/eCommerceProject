import React from 'react'
import classes from './ErrorPage.module.css'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return   <div className={classes.page100} >
  <section>
    <h1>404</h1>
    <h3>Sorry, the page you tried cannot be found</h3>
    <Link to='/' className={classes.btn} >
      back home
    </Link>
  </section>
</div>
}

export default ErrorPage
