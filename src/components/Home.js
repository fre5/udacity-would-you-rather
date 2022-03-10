import { useState } from 'react'
import { connect } from 'react-redux'
import HomeCard from './HomeCard'
import Results from './Results'

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
      { question === 'unanswered' ?  questions(unansweredQuestions, question, props) : questions(answeredQuestions, question, props) }
    </>
  )
}

const questions = (questions, question, props) => {

  if (questions.length < 1) return <div className="home-container"><h3 style={{textAlign: 'center'}}>There are no {question} questions</h3></div>

  return (
    <div className="home-container">
      {questions.sort((a, b) => props.questions[b].timestamp - props.questions[a].timestamp).map(id => {
        const questionOne = props.questions[id].optionOne.text
        const author = props.questions[id].author
        if (question === 'answered' && props.authedUser !== null) {
          return <Results key={id} index={id} />
        } else {
          return <HomeCard key={id} index={id} question={questionOne} name={props.users[author].name} avatar={props.users[author].avatarURL}  />
        }    
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

export default connect (mapStateToProps)(Home)
