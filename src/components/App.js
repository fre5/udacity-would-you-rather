import React, { Component }  from 'react'
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
import NotFound from './NotFound'

class App extends Component {

  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route path='*' element={ <NotFound /> } />
          <Route path='/' element={ <Home />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/results/:id' element={ <Results /> }  />
          <Route path='/add' element={ this.props.authedUser ? <NewQuestion /> : <Login />}  />
          <Route path='/leaderboard' element={ this.props.authedUser ? <LeaderBoard /> : <Login />}  />
          <Route path='/questions/:question_id' element={ <Poll /> } />
        </Routes>
      </div>   
    )
  }
}

const mapStateToProps = (authedUser) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
