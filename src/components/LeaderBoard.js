import LeaderBoardCard from './LeaderBoardCard'
import { connect } from 'react-redux'
import Login from './Login'

const LeaderBoard = (props) => {

  if (!props.authedUser) return <Login />

  return (
    <div style={{ width: 600, margin: '20px auto' }}>
      <LeaderBoardCard />
      <LeaderBoardCard />
    </div>
  )
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect (mapStateToProps)(LeaderBoard)