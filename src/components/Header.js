import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  componentDidMount = () => {
  }

  logout = (event) => {
    event.preventDefault()
    this.props.dispatch(setAuthedUser(null))
  }

  render() {
    const formatName = this.props.authedUser ? this.props.users[this.props.authedUser].name : ''
    return (
      <header className="header">
        <div className="app-name">
          <h4>Would You Rather App</h4> 
        </div>
        <Nav className="navigation justify-content-center" activeKey="/">
          <Nav.Item>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/new" className="nav-link">New Question</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/leaderboard" className="nav-link">Leader Board</NavLink>
          </Nav.Item>
          <Nav className="login-nav">
            <Nav.Item>
              <Nav.Link disabled style={{ opacity: this.props.authedUser ? 1 : 0 }}>Hello, { formatName }</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link style={{ display: this.props.authedUser ? 'inline-block' : 'none' }} onClick={this.logout}>Logout</Nav.Link>
              <NavLink style={{ display: this.props.authedUser ? 'none' : 'inline-block' }} to="/login" className="nav-link">Login</NavLink>
            </Nav.Item>
          </Nav>
        </Nav>
      </header>
    )
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users,
    authedUser,
  }
}

export default connect (mapStateToProps)(Header)
