export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_QUESTION_USER = 'SAVE_QUESTION_USER'

export const receiveUsers = (users) => ({ type: RECEIVE_USERS, users })
export const saveQuestionUser = (questionAnswer) => ({ type: SAVE_QUESTION_USER, questionAnswer})