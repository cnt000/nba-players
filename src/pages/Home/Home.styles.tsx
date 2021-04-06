import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledImgContainer = styled.div`
  height: 100px;
  width: 138px;
  background-color: ${({ theme }) => theme.colors.grey};
  margin-right: 0.4rem;
  position: relative;

  img {
    height: 100%;
    width: auto;
    z-index: 1;
    position: relative;
    &:before {
      content: '';
      width: 138px;
      height: 100px;
      background-color: rgba(5, 28, 45, var(--bg-opacity));
      background-image: url(https://randomuser.me/api/portraits/lego/1.jpg);
      position: absolute;
      top: 0;
      left: 0;
      background-size: 138px 110px;
      background-repeat: no-repeat;
    }
  }
`

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  strong {
    margin-bottom: 0.2rem;
  }

  span {
    font-size: 90%;
    padding-top: 0.2rem;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  padding: 0.4rem 1rem;
  height: 120px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.4rem;
`

export const StyledEmptyResult = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.4rem;
  margin-top: 1rem;
`

