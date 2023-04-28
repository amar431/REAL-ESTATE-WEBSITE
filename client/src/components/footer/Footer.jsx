import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            <b>Good website for Selling and Buying properties!!</b>
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: 9392812066</span>
          <span>YouTube: Amar</span>
          <span>GitHub: Amar's git</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: India</span>
          <span>Current Location: Punjab</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer