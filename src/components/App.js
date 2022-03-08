import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { Routes, Route } from 'react-router-dom'

//components
import Header from './Header'
import Login from './Login'
import Poll from './Poll'
import Results from './Results'
import NewQuestion from './NewQuestion'
import Home from './Home'
import LeaderBoard from './LeaderBoard'

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='results' element={<Results />} />
          <Route path='new' element={<NewQuestion />} />
          <Route path='leaderboard' element={<LeaderBoard />} />
          <Route path='poll' element={<Poll />} />
        </Routes>
      </div>   
    )
  }
}

export default connect()(App);
