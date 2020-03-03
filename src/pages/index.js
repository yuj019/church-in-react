import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    
    <div className="Hero">
        <div className="HeroGroup">
          <h1>Welcome to<br/>Church in San Jose</h1>
          <p>The Lord loves us before we love Him.</p>
          <Link to="/video">Join us</Link>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
    </div>
  </div>
  
)

export default IndexPage