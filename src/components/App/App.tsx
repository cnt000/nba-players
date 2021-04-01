import React from 'react'
import { Router, Link } from '@reach/router'
import HomeCounter from '../../components/HomeCounter'

const Home: React.FC<{ path: string }> = () => (
  <div>
    <h1>Home {}</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="/?search=pippen">Pippen search</Link>{' '}
      | <Link to="/player/2933">Player 2933</Link>
    </nav>
    <HomeCounter />
  </div>
)
const Player: React.FC<{ path: string; id?: string }> = ({ path, id }) => (
  <div>
    <h1>Player {id}</h1>{' '}
    <nav>
      <Link to="/">Home</Link> | <Link to="/?search=pippen">Pippen search</Link>{' '}
      | <Link to="/player/2933">Player 2933</Link>
    </nav>
    <HomeCounter />
  </div>
)

function App() {
  return (
    <Router>
      <Home path="/" />
      <Player path="/player/:id" />
    </Router>
  )
}

export default App
