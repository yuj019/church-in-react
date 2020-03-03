import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
  <div className="HeaderGroup">
    <Link to="/home">Home</Link>
    <Link to="/announcements">Announcements</Link>
    <Link to="/readings">Readings</Link>
    <Link to="/church-services">Church Services</Link>
    <Link to="/media-library">Media Library</Link>
    <Link to="/contact-us">Contact Us</Link>
    <Link to="/donate"><button>Donate</button></Link>
  </div>
  </div>
)

export default Header
