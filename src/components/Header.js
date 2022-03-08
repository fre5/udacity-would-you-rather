import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

import { Nav } from 'react-bootstrap'

class Header extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  componentDidMount = () => {
  }

  logout = () => {
    this.props.dispatch(setAuthedUser(null))
  }

  render() {
    return (
      <header className="header">
        <div className="app-name">
          <h4>Would You Rather App</h4> 
        </div>
        <Nav className="navigation justify-content-center" activeKey="/">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/new">New Question</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/leaderboard">Leader Board</Nav.Link>
          </Nav.Item>
          <Nav className="login-nav">
            <Nav.Item>
              <Nav.Link disabled style={{ opacity: this.props.authedUser ? 1 : 0 }}>Hello, { this.props.authedUser }</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ display: this.props.authedUser ? 'inline-block' : 'none' }} onClick={this.logout}>Logout</Nav.Link>
              <Nav.Link style={{ display: this.props.authedUser ? 'none' : 'inline-block' }} href="/login">Login</Nav.Link>
            </Nav.Item>
          </Nav>
        </Nav>
      </header>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  }
}

export default connect (mapStateToProps)(Header)
