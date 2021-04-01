import React from 'react'
import {
  StyledContainer,
  StyledHeader,
  StyledLogo,
} from './HomeCounter.styles'
import logo from './logo.svg'
import Button from '@material-ui/core/Button'
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
        <div>
          <Button variant="contained" color="primary" onClick={() => alert('ok')}>
            Hello World
          </Button>
        </div>
      </StyledHeader>
    </StyledContainer>
  )
}

export default HomeCounter
