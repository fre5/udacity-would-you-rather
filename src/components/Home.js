import { useState } from 'react'
import { connect } from 'react-redux'
import HomeCard from './HomeCard'

const Home = (props) => {
  const [question, setQuestion] = useState('unanswered')
  const questionIds = Object.keys(props.questions)
  return (
    <>
      <div className="home-titles">
        <div className={ question === "unanswered" ? "tab selected" : "tab" }onClick={() => setQuestion('unanswered')}><strong>Unanswered Questions</strong></div>
        <div className={ question === "answered" ? "tab selected" : "tab" } onClick={() => setQuestion('answered')}><strong>Answered Questions</strong></div>
      </div>
      <div className="home-container">
        {questionIds.sort((a, b) => props.questions[b].timestamp - props.questions[a].timestamp).map(id => {
          const question = props.questions[id].optionOne.text
          const author = props.questions[id].author
          return <HomeCard key={id} question={question} name={props.users[author].name} />
        })}
      </div>
    </>
  )
}

const mapStateToProps = ({ users, questions }) => {
  return {
    users,
    questions,
  }
}

export default connect (mapStateToProps)(Home)
