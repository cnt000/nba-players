import React from 'react'
import {
  StyledContainer,
  StyledHeader,
  StyledLogo,
  StyledLink,
} from './HomeCounter.styles'
import logo from './logo.svg'
import { Counter } from '../../state/features/counter/Counter'

const HomeCounter: React.FC = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledLogo src={logo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <StyledLink
            className="App-Styledlink"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </StyledLink>
          ,<span> and </span>
          <StyledLink
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </StyledLink>
        </span>
      </StyledHeader>
    </StyledContainer>
  )
}

export default HomeCounter
