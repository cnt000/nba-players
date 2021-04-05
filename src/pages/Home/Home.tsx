import React, { useState, useEffect } from 'react'
import { Link, useLocation,createHistory, HistorySource } from '@reach/router'
import TextField from '@material-ui/core/TextField'
import Layout from '../../components/Layout'

interface IMeta {
  total_pages: number
  current_page: number
  next_page: number
  per_page: number
  total_count: number
}

const Home: React.FC<{ path: string; page?: string }> = () => {
  const location = useLocation()
  const history = createHistory(window as any)
  const urlParams = new URLSearchParams(location.search)
  const search = urlParams.get('search') || ''
  const currentPage = +(urlParams.get('page') || 0)
  const [searchText, setSearchText] = useState(search)
  const [players, setPlayers] = useState([])
  const [aPage, setAPage] = useState(currentPage)

  const [meta, setMeta] = useState<IMeta>({
    total_pages: 1,
    current_page: 0,
    next_page: 1,
    per_page: 25,
    total_count: 1,
  })

  useEffect(() => {
    const loadData = async () => {
      const result = await fetch(
        `https://www.balldontlie.io/api/v1/players?search=${searchText}&page=${
          aPage + 1
        }&per_page=25`
      )
      const { data, meta } = await result.json()
      setPlayers(data)
      setMeta(meta)
    }
    if(searchText.length > 0) {
      loadData()
    }
    history.navigate(`/?page=${aPage + 1}&search=${searchText}`)
  }, [searchText, aPage])

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
        {aPage > 0 && (
          <button onClick={() => setAPage(aPage - 1)}>Prev Page: {aPage - 1}</button>
        )}
        Page: {aPage}
        {aPage < meta.total_pages - 1 && (
          <button onClick={() => setAPage(aPage + 1)}>Next Page: {aPage + 1}</button>
        )}
      </>
    </Layout>
  )
}

export default Home
