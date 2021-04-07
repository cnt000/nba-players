import styled from 'styled-components'

export const StyledInfoText = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.4rem;
  margin-top: 1rem;
`

export const StyledForm = styled.form`
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`
