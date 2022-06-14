import React from 'react'
import './footer.scss'

const Footer = () => { 
  return (
    <footer className='footer'>
      <div className="line"></div>
      <div className="info">
        <p>Guidelines</p>
        <p>FAQ</p>
        <p>Lists</p>
        <p>API</p>
        <p>Security</p>
        <p>Legal</p>
        <p>Apply to YC</p>
        <p>Contact</p>
      </div> 
      <div className="input">

      <label htmlFor="search">Search : </label>
      <input type="text" name="search" id="search" />
      </div>
    </footer> 
  )
}

export default Footer