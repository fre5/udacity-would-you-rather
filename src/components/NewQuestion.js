import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const NewQuestion = (props) => {
  const emptyOptions = { optionOneText: '', optionTwoText: '', author: '' }
  const [question, setQuestion] = useState(emptyOptions)
  const handleClick = () => {
    console.log(question)
  }
  return (
    <Card className="new=question" style={{ width: 600, margin: '20px auto' }}>
      <Card.Header>
        <Card.Title>
          <h2>Create New Question</h2>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <p>Complete the question:</p>
        <h4>Would you rather ...</h4>
        <input className="input" type="text" onChange={(event) => setQuestion({ optionOneText: event.target.value, optionTwoText: question.optionTwoText, author: props.authedUser})} />
        <div className="or-line"><p className="or">OR</p></div>
        <input className="input" type="text" onChange={(event) => setQuestion({ optionOneText: question.optionOneText, optionTwoText: event.target.value, author: props.authedUser})} />
        <Button variant="primary" style={{ display: 'block', marginTop: 20 , width: '100%'}} onClick={handleClick}>Submit</Button>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = ({ questions, authedUser }) => {
  return {
    questions,
    authedUser
  }
}

export default connect (mapStateToProps)(NewQuestion)