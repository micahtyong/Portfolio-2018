import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'

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
          <img src = {require('../images/Icon.png')} 
          width = "30"></img>
          <Link to = "/">Work</Link>
          <Link to = "/about">About</Link>
          {/* <Link to = "/about"><button>About</button></Link> */}
        </div>
      </div>
    )
  }
}

export default Header
