import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Routes
import Stats from './components/Stats'
import Calendar from './components/Calendar'
import Details from './components/Details'

//Layout
import Header from './components/layout/Header'
import Navigator from './components/layout/Navigator'

//style
import './App.css'
import './components/layout/index.css'
import './components/Stats/index.css'

function App() {
  return (
    <div className='App'>
      <div id='bg-monstera' />
      <Router>
        <Header />
        <Navigator />
        <Route exact path='/' render={Stats} />
        <Route path='/calendar' render={Calendar} />
        <Route path='/details' render={Details} />
      </Router>
    </div>
  )
}

export default App
