import React from 'react'
import Link from 'gatsby-link'
import './header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
}

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
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
  }
}

export default Header
