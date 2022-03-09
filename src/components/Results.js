import { Card, ProgressBar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

const Results = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()

  if (!props.authedUser) { 
    navigate('/login') 
    return <></>
  }

  const question = props.questions[id]
  const user = props.users[question.author].name
  const avatar = props.users[question.author].avatarURL
  const optionOneText = question.optionOne.text
  const optionTwoText = question.optionTwo.text

  return (
    <Card style={{ width: 600, margin: '20px auto' }}>
      <Card.Header>
        <Card.Title>Asked by {user}</Card.Title>
      </Card.Header>
      <Card.Body>
        <img src={avatar} className="avatar" style={{ marginTop: 90 }} alt="avatar"/>
        <div className="poll-question">
          <h4>Results:</h4>
          <div className="poll-answer">
            <div className="your-vote">Your vote</div>
            <p>{optionOneText}</p>
            <strong><ProgressBar variant="primary" now={60} label={'60%'} /></strong>
            <p style={{textAlign: 'center'}}><strong>2 out of 3 votes</strong></p>
          </div>
          <div className="poll-answer">
            <div className="your-vote">Your vote</div>
            <p>{optionTwoText}</p>
            <strong><ProgressBar variant="primary" now={40} label={'40%'} /></strong>
            <p style={{textAlign: 'center'}}><strong>2 out of 3 votes</strong></p>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  return {
    users,
    questions,
    authedUser
  }
}

export default connect (mapStateToProps)(Results)