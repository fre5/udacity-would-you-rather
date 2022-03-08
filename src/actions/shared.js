import { getInitialData, saveQuestion } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions, addQuestion } from '../actions/questions'

export const handleInitialData = 
  () => (dispatch) => getInitialData()
                      .then(({ users, questions }) => {
                        dispatch(receiveUsers(users))
                        dispatch(receiveQuestions(questions))
                      })
  
export const handleAddQuestion = 
  (question) => (dispatch, getState) => {
    const { authedUser } = getState()
    return saveQuestion({  
      optionOneText: question.optionOneText,
      optionTwoText: question.optionTwoText,
      author: authedUser,
    }).then(( question ) => (dispatch(addQuestion(question))) )
  }