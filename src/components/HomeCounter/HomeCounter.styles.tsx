import styled from 'styled-components'

export const StyledContainer = styled.div`
  text-align: center;
`

export const StyledLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 1rem;
  border-radius: 8px;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-float infinite 3s ease-in-out;
  }
`

export const StyledHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

export const StyledLink = styled.a`
  color: rgb(112, 76, 182);
`
