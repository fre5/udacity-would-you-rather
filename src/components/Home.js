import { useState } from 'react'
import { connect } from 'react-redux'
import HomeCard from './HomeCard'

const Home = (props) => {
  const [question, setQuestion] = useState('unanswered')
  const answeredQuestions = Object.keys(props.questions)
    .filter(question => props.questions[question].optionOne.votes.length !== 0 || props.questions[question].optionTwo.votes.length !== 0)
  const unansweredQuestions = Object.keys(props.questions)
    .filter(question => props.questions[question].optionOne.votes.length === 0 && props.questions[question].optionTwo.votes.length === 0)
  return (
    <>
      <div className="home-titles">
        <div className={ question === "unanswered" ? "tab selected" : "tab" }onClick={() => setQuestion('unanswered')}><strong>Unanswered Questions</strong></div>
        <div className={ question === "answered" ? "tab selected" : "tab" } onClick={() => setQuestion('answered')}><strong>Answered Questions</strong></div>
      </div>
      { question === 'unanswered' ?  questions(unansweredQuestions, props) : questions(answeredQuestions, props) }
    </>
  )
}

const questions = (questions, props) => {
  return (
    <div className="home-container">
      {questions.sort((a, b) => props.questions[b].timestamp - props.questions[a].timestamp).map(id => {
        const question = props.questions[id].optionOne.text
        const author = props.questions[id].author
        return <HomeCard key={id} question={question} name={props.users[author].name} avatar={props.users[author].avatarURL}  />
      })}
    </div>
  )
}

const mapStateToProps = ({ users, questions }) => {
  return {
    users,
    questions,
  }
}

export default connect (mapStateToProps)(Home)
