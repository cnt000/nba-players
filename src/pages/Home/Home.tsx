import React, { useState, useEffect } from 'react'
import { Link, useLocation } from '@reach/router'
import TextField from '@material-ui/core/TextField'
import Layout from '../../components/Layout'

interface IMeta {
  total_pages: number
  current_page: number
  next_page: number
  per_page: number
  total_count: number
}

const Home: React.FC<{ path: string; page?: string }> = ({ page }) => {
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search)
  const search = urlParams.get('search') || ''
  const [searchText, setSearchText] = useState(search)
  const [players, setPlayers] = useState([])
  const currentPage: number = +(page || 0)
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
          currentPage + 1
        }&per_page=25`
      )
      const { data, meta } = await result.json()
      setPlayers(data)
      setMeta(meta)
    }
    loadData()
  }, [searchText, currentPage])

  const resetPage = () => {
    // reset page
  }

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
              resetPage()
            }}
          />
        </form>
        <ul>
          {players.map(({ first_name, last_name, id }) => (
            <li>
              <Link to={`/player/${id}`}>
                {first_name} {last_name}
              </Link>
            </li>
          ))}
        </ul>
        {currentPage > 0 && (
          <Link to={`/${currentPage - 1}`}>Prev Page: {currentPage - 1}</Link>
        )}
        Page: {currentPage}
        {currentPage < meta.total_pages - 1 && (
          <Link to={`/${currentPage + 1}`}>Next Page: {currentPage + 1}</Link>
        )}
      </>
    </Layout>
  )
}

export default Home
