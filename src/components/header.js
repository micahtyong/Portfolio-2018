import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

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
    if (scrollTop > 750) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className = {this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className = "HeaderGroup">
          {/* <img src = {require('../images/Icon.png')} 
          width = "30"></img> */}
          <div className = "IconLoc">
            <img src = {require('../images/Icon.png')} 
            width = "30"></img>
          </div>
          <div className = "Menu">
            <Link to = "/">Work</Link>
            <Link to = "/about">About</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
