import styled from 'styled-components'
import { Link } from '@reach/router'

const playerImgWidth = '138px'

export const StyledImgContainer = styled.div`
  height: 100px;
  width: ${playerImgWidth};
  background-color: ${({ theme }) => theme.colors.grey};
  margin-right: 0.4rem;
  position: relative;
  top: 5px;
  overflow: hidden;

  img {
    height: 100%;
    width: auto;
    z-index: 1;
    position: relative;
    &:before {
      content: '';
      width: ${playerImgWidth};
      height: ${playerImgWidth};
      background-color: rgba(5, 28, 45, var(--bg-opacity));
      background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vKqcYMYmMVCnOALFlkD0ZgHaHa%26pid%3DApi&f=1);
      position: absolute;
      top: -8px;
      left: 0;
      background-size: ${playerImgWidth} ${playerImgWidth};
      background-repeat: no-repeat;
    }
  }
`

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 6px;

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
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.4rem;
`

export const StyledInfoText = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.4rem;
  margin-top: 1rem;
`
