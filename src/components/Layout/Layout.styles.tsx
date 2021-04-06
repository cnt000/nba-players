import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
  padding: 1rem;
  font-size: 1.8rem;
`

export const StyledLogo = styled.img`
  height: 4rem;
  pointer-events: none;
`

export const StyledSubHeader = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  text-align: center;
  font-size: 1.4rem;
  padding: 0.6rem;
`
