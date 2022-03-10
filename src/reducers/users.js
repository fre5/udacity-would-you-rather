import { RECEIVE_USERS, SAVE_QUESTION_USER } from '../actions/users'

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case SAVE_QUESTION_USER: 
      return {
        ...state,
        [action.questionAnswer.authedUser]: {
          ...state[action.questionAnswer.authedUser],
          answers: {
            ...state[action.questionAnswer.authedUser].answers,
            [action.questionAnswer.qid]: action.questionAnswer.answer,
          }
        }
      }
    default:
      return state
  }
}