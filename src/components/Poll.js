import React from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import Login from './Login'

const Poll = (props) => {
  const handleSubmit = (event) => {
    console.log('test')
  }

  if (!props.authedUser) return <Login />

  return (
    <Card style={{ width: 600, margin: '20px auto' }}>
      <Card.Header>
        <Card.Title>{props.author} asks:</Card.Title>
      </Card.Header>
      <Card.Body>
        <img src="avatar-placeholder.jpeg" className="avatar" alt="avatar"/>
        <div className="poll-question">
          <h4>Would You Rather ...</h4>
          <div>
            <input type="radio" id="first" style={{ margin: '10px 10px 10px 0px' }}/>
            <label htmlFor="first">{ props.optionOneText }</label>
          </div>
          <div>
            <input type="radio" id="second" style={{ margin: '10px 10px 10px 0px' }}/>
            <label htmlFor="second">{ props.optionTwoText }</label>
          </div>
          <Button variant="primary" style={{ marginTop: 10, width: '100%' }} onClick={handleSubmit}>Submit</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect (mapStateToProps)(Poll)