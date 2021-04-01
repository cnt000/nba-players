import React from 'react'
// import logo from './logo.svg'
// import { Counter } from '../features/counter/Counter'
import styled from 'styled-components'
import { Router, Link } from '@reach/router'

const Home: React.FC<{ path: string }> = ({ path }) => (
  <div>
    <h1>Home</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="/player/2933">Player 2933</Link>
    </nav>
  </div>
)
const Player: React.FC<{ path: string }> = ({ path }) => <div>Dash</div>

const Container = styled.div`
  text-align: center;
`

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 1rem;
  border-radius: 8px;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-float infinite 3s ease-in-out;
  }
`

const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

const StyledLink = styled.a`
  color: rgb(112, 76, 182);
`

function App() {
  return (
    <Router>
      <Home path="/" />
      <Player path="/player/:id" />
    </Router>
    // <Container>
    //   <Header>
    //     <Logo src={logo} alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <Link
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </Link>
    //       ,<span> and </span>
    //       <Link
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </Link>
    //     </span>
    //   </Header>

    // </Container>
  )
}

export default App
