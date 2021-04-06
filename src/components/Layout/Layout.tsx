import React from 'react'
import { Link, useLocation, navigate } from '@reach/router'
import { StyledHeader, StyledLogo, StyledSubHeader } from './Layout.styles'
import logo from '../../components/HomeCounter/logo.svg'

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
          <h2>
            {<button onClick={() => navigate(-1)}>🔙</button>}
            {title}
          </h2>
        </StyledSubHeader>
      )}
      <main>{children}</main>
    </>
  )
}

export default Layout
