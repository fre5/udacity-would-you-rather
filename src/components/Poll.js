import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/shared'

const Poll = (props) => {
  const [selection, setSelection] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const questionAnswer = {
      authedUser: props.authedUser,
      qid: id,
      answer: selection
    }
    props.dispatch(handleSaveQuestionAnswer(questionAnswer))
    navigate(`/results/${id}`)
  }
  const question = props.questions[id]
  const user = props.users[question.author].name
  const avatar = props.users[question.author].avatarURL
  const optionOneText = question.optionOne.text
  const optionTwoText = question.optionTwo.text
  return (
    <Card style={{ width: 600, margin: '20px auto' }}>
      <Card.Header>
        <Card.Title>{user} asks:</Card.Title>
      </Card.Header>
      <Card.Body>
        <img src={avatar} className="avatar" alt="avatar"/>
        <div className="poll-question">
          <h4>Would You Rather ...</h4>
          <div>
            <input type="radio" id="first" name="question" style={{ margin: '10px 10px 10px 0px' }} onChange={(event) => setSelection(optionOneText) }/>
            <label htmlFor="first" >{ optionOneText }</label>
          </div>
          <div>
            <input type="radio" id="second" name="question" style={{ margin: '10px 10px 10px 0px' }} onChange={(event) => setSelection(optionTwoText) }/>
            <label htmlFor="second">{ optionTwoText }</label>
          </div>
          <Button variant="primary" style={{ marginTop: 10, width: '100%' }} onClick={handleSubmit}>Submit</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  return {
    users,
    questions,
    authedUser,
  }
}

export default connect (mapStateToProps)(Poll)