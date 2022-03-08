import { Form, Card, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

const Login = (props) => {
  const [inputValue, setInputValue] = useState('')

  const handleClick = (event) => {
    props.dispatch(setAuthedUser(inputValue.value))
    inputValue.value = ''
  }

  if (props.authedUser) return <></>

  return (
    <Card className="login-card">
      <Card.Header>
        <img src="wyr-logo.jpeg" alt="logo" style={{ width: '100%', margin: '10px 0px' }} />
      </Card.Header>
      <Card.Body>
        <Card.Text style={{ textAlign: 'center' }}>Please sign in to continue</Card.Text>
        <Form.Select aria-label="Default select example" ref={(selection) => setInputValue(selection)}>
          <option></option>
          { props.users.map((user, index) => <option key={index}>{user}</option> )  }
        </Form.Select>
        <br />
        <Button variant="primary" style={{ width: '100%' }} onClick={handleClick}>Sign in</Button>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users: Object.keys(users).map(user => users[user].name),
    authedUser,
  }
}

export default connect (mapStateToProps)(Login)