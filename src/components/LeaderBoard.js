import LeaderBoardCard from './LeaderBoardCard'
import { connect } from 'react-redux'
import Login from './Login'

const LeaderBoard = (props) => {

  if (!props.authedUser) return <Login />

  return (
    <div style={{ width: 600, margin: '20px auto' }}>
    { Object.keys(props.users).map((user, index) => {
      const userObj = props.users[user]
      const key = userObj.id
      const name = userObj.name
      const answered = userObj.questions.length
      const created = Object.keys(props.questions).map(question => props.questions[question]).filter(question => question.author === user ).length
      const score = answered + created
      const avatar = userObj.avatarURL
      return <LeaderBoardCard key={key} index={index} name={name} answered={answered} created={created} score={score} avatar={avatar} />
    })}
    </div>
  )
}

const mapStateToProps = ({ users, questions, authedUser }) => {
  return {
    users,
    questions,
    authedUser,
  }
}

export default connect (mapStateToProps)(LeaderBoard)