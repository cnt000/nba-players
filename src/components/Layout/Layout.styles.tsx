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
  height: 50px;
  line-height: 50px;
`

export const StyledH2 = styled.div`
  text-align: center;
  position: relative;
`

export const StyledBackButton = styled.button`
  position: absolute;
  left: 5px;
  bottom: 10px;
`

