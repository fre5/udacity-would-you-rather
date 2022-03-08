import { Form, Card, Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()
  const handleClick = (event) => {
    event.preventDefault()
    const id = inputValue.value.split(" ").join("").toLowerCase()
    props.dispatch(setAuthedUser(id))
    inputValue.value = ''
    navigate("/")
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