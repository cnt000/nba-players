import React from 'react'
import { Link, useLocation, navigate } from '@reach/router'
import { StyledHeader, StyledLogo, StyledSubHeader, StyledH2, StyledBackButton } from './Layout.styles'
import logo from './logo.svg'

type Props = {
  children: JSX.Element
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = '' }: Props) => {
  const location = useLocation()
  const isHp = location.pathname === '/'

  return (
    <>
      <StyledHeader>
        <h1>
          <Link to="/">
            <StyledLogo src={logo} alt="logo" /> Players
          </Link>
        </h1>
      </StyledHeader>
      {!isHp && (
        <StyledSubHeader>
          <StyledH2>
            {<StyledBackButton onClick={() => navigate(-1)}>🔙</StyledBackButton>}
            <span>{title}</span>
          </StyledH2>
        </StyledSubHeader>
      )}
      <main>{children}</main>
    </>
  )
}

export default Layout
