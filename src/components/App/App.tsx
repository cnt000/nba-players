import React from 'react'
import { Router } from '@reach/router'
import Home from '../../pages/Home'
import Player from '../../pages/Player'

function App() {
  return (
    <Router>
      <Home path="/" />
      <Player path="/player/:id" />
    </Router>
  )
}

export default App
