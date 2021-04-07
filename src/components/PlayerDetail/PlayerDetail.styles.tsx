import styled from 'styled-components'

export const StyledImgContainer = styled.div`
  height: 240px;
  width: 330px;
  background-color: ${({ theme }) => theme.colors.grey};
  margin: 0.4rem auto;
  position: relative;

  img {
    height: 100%;
    width: auto;
    z-index: 1;
    position: relative;
    &:before {
      content: '';
      width: 330px;
      height: 240px;
      background-color: rgba(5, 28, 45, var(--bg-opacity));
      background-image: url(https://randomuser.me/api/portraits/lego/1.jpg);
      position: absolute;
      top: 0;
      left: 0;
      background-size: 330px 240px;
      background-repeat: no-repeat;
    }
  }
`

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 50%;

  strong {
    margin-bottom: 0.2rem;
  }

  span {
    font-size: 90%;
    padding-top: 0.2rem;
  }
`

export const StyledRowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 330px;
  margin: 0 auto;
`
