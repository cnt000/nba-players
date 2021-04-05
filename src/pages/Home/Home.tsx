import React, { useState } from 'react'
import { Link, useLocation } from '@reach/router'
import { useLoadPlayers } from '../../hooks/useLoadPlayers'
import TextField from '@material-ui/core/TextField'
import Layout from '../../components/Layout'

const Home: React.FC<{ path: string; page?: string }> = () => {
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search)
  const search = urlParams.get('search') || ''
  const currentPage = +(urlParams.get('page') || 1)
  const [searchText, setSearchText] = useState(search)
  const [aPage, setAPage] = useState(currentPage)
  const { players, meta } = useLoadPlayers(searchText, aPage)

  return (
    <Layout title={`Home ${search}`}>
      <>
        <form>
          <TextField
            id="searchText"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
              setAPage(1)
            }}
          />
        </form>
        <ul>
          {players.map(({ first_name, last_name, id }) => (
            <li key={id}>
              <Link to={`/player/${id}`}>
                {first_name} {last_name}
              </Link>
            </li>
          ))}
        </ul>
        {aPage > 1 && (
          <button onClick={() => setAPage(aPage - 1)}>
            Prev Page: {aPage - 1}
          </button>
        )}
        Page: {aPage}
        {aPage < meta.total_pages && (
          <button onClick={() => setAPage(aPage + 1)}>
            Next Page: {aPage + 1}
          </button>
        )}
      </>
    </Layout>
  )
}

export default Home
