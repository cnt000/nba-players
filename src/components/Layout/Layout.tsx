import React from 'react'
import { Link, useLocation, navigate } from '@reach/router'

type Props = {
  children: JSX.Element
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = 'title' }: Props) => {
  const location = useLocation()
  const isHp = location.pathname === '/'

  return (
    <>
      <header>
        {!isHp && <button onClick={() => navigate(-1)}>🔙</button>}
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </header>
      <div>
        <h2>{title}</h2>
        <nav>
          <Link to="/">Home</Link> | <Link to="/player/2933">Player 2933</Link>
        </nav>
      </div>
      <main>{children}</main>
    </>
  )
}

export default Layout
