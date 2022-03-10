import { Card, ProgressBar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

const Results = (props) => {
  const { question_id } = useParams()

  const question = props.questions[question_id] || props.questions[props.index]
  const user = props.users[question.author].name
  const avatar = props.users[question.author].avatarURL
  const optionOneText = question.optionOne.text
  const optionTwoText = question.optionTwo.text
  const optionOneVotes = question.optionOne.votes.length
  const optionTwoVotes = question.optionTwo.votes.length  
  const totalVotes = optionOneVotes + optionTwoVotes
  const optionOnePercentage = parseInt((optionOneVotes / totalVotes) * 100, 10)
  const optionTwoPercentage = parseInt((optionTwoVotes / totalVotes) * 100, 10)
  const authedUserVote = question.optionOne.votes.includes(props.authedUser) ? 'optionOne' : 'optionTwo'

  return (
    <Card style={{ width: 560, margin: '20px auto' }}>
      <Card.Header>
        <Card.Title>Asked by {user}</Card.Title>
      </Card.Header>
      <Card.Body>
        <img src={avatar} className="avatar" style={{ marginTop: 90 }} alt="avatar"/>
        <div className="poll-question">
          <h4>Results:</h4>
          <div className="poll-answer">
            <div className="your-vote" style={{ opacity: authedUserVote === 'optionOne' ? 1 : 0}}>Your vote</div>
            <p>{optionOneText}</p>
            <strong><ProgressBar variant="primary" now={optionOnePercentage} label={`${optionOnePercentage}%`} /></strong>
            <p style={{textAlign: 'center'}}><strong>{optionOneVotes} out of {totalVotes} votes</strong></p>
          </div>
          <div className="poll-answer">
            <div className="your-vote" style={{ opacity: authedUserVote === 'optionTwo' ? 1 : 0}}>Your vote</div>
            <p>{optionTwoText}</p>
            <strong><ProgressBar variant="primary" now={optionTwoPercentage} label={`${optionTwoPercentage}%`} /></strong>
            <p style={{textAlign: 'center'}}><strong>{optionTwoVotes} out of {totalVotes} votes</strong></p>
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