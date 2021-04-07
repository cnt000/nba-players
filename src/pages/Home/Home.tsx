import React, { useState } from 'react'
import { useLocation } from '@reach/router'
import { useLoadPlayers } from '../../hooks/useLoadPlayers'
import { StyledInfoText, StyledForm } from './Home.styles'
import TextField from '@material-ui/core/TextField'
import Layout from '../../components/Layout'
import PlayersList from '../../components/PlayersList'

const Home: React.FC<{ path: string }> = () => {
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search)
  const search = urlParams.get('search') || ''
  const currentPage = +(urlParams.get('page') || 1)
  const sanitizedSearch = /[\w]+/.test(search) ? search : ''
  const sanitizedPage = /[0-9]+/.test(currentPage.toString()) ? currentPage : 1
  const [searchText, setSearchText] = useState(sanitizedSearch)
  const [page, setPage] = useState(sanitizedPage)

  const { players, meta, loading } = useLoadPlayers(searchText, sanitizedPage)

  const handleSearch = (value: string) => {
    setSearchText(value)
    setPage(1)
  }

  return (
    <Layout title={''}>
      <>
        <StyledForm>
          <TextField
            id="searchText"
            type="text"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            fullWidth
            label="search for a player"
            variant="filled"
          />
        </StyledForm>
        {loading && <StyledInfoText>Loading...</StyledInfoText>}
        {!loading && (
          <PlayersList players={players} meta={meta} sanitizedPage={page} />
        )}
      </>
    </Layout>
  )
}

export default Home
