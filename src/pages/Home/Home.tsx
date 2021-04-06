import React, { useState } from 'react'
import { useLocation } from '@reach/router'
import { useLoadPlayers } from '../../hooks/useLoadPlayers'
import Pagination from '@material-ui/lab/Pagination'
import {
  StyledLink,
  StyledImgContainer,
  StyledInfoContainer,
  PaginationContainer,
} from './Home.styles'
import TextField from '@material-ui/core/TextField'
import Layout from '../../components/Layout'

const Home: React.FC<{ path: string }> = () => {
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search)
  const search = urlParams.get('search') || ''
  const currentPage = +(urlParams.get('page') || 1)
  const [searchText, setSearchText] = useState(search)
  const [page, setPage] = useState(currentPage)
  const { players, meta } = useLoadPlayers(searchText, page)

  const handleSearch = (value: string) => {
    setSearchText(value)
    setPage(1)
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <Layout title={''}>
      <>
        <form>
          <TextField
            id="searchText"
            type="text"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            fullWidth
            label="search for a player"
            variant="filled"
          />
        </form>
        <ul>
          {players.length === 0 ? (
            <div>No results</div>
          ) : (
            players.map(
              ({
                id,
                first_name,
                last_name,
                position,
                height_feet,
                height_inches,
                weight_pounds,
              }) => {
                return (
                  <li key={id}>
                    <StyledLink to={`/player/${id}`}>
                      <StyledImgContainer>
                        <img
                          src={`https://nba-players.herokuapp.com/players/${last_name}/${first_name}`}
                          alt={`${first_name} ${last_name}`}
                          loading="lazy"
                        />
                      </StyledImgContainer>
                      <StyledInfoContainer>
                        <strong>
                          {first_name} {last_name}
                        </strong>
                        {position && <span>Position: {position}</span>}
                        {height_feet && <span>Height (ft): {height_feet}</span>}
                        {height_inches && (
                          <span>Height (in): {height_inches}</span>
                        )}
                        {weight_pounds && <span>Weight: {weight_pounds} </span>}
                      </StyledInfoContainer>
                    </StyledLink>
                  </li>
                )
              }
            )
          )}
        </ul>
        <PaginationContainer>
          {players.length > 0 && (
            <Pagination
              page={page}
              onChange={handleChange}
              count={meta.total_pages}
              color="primary"
            />
          )}
        </PaginationContainer>
      </>
    </Layout>
  )
}

export default Home
