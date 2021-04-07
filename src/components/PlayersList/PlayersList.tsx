import React from 'react'
import { IPlayer, IMeta } from '../../types/ApiResponse'
import Pagination from '@material-ui/lab/Pagination'
import {
  StyledLink,
  StyledImgContainer,
  StyledInfoContainer,
  StyledPaginationContainer,
  StyledInfoText,
} from './PlayersList.styles'

const PlayersList: React.FC<{
  players: IPlayer[]
  meta: IMeta
  sanitizedPage: number
  setPage: any
}> = ({ players, meta, sanitizedPage, setPage }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <>
      {players.length === 0 ? (
        <StyledInfoText>No results</StyledInfoText>
      ) : (
        <ul>
          {players.map(
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
                      <span>Position: {position || '-'}</span>
                      <span>Height (ft): {height_feet || '-'}</span>
                      <span>Height (in): {height_inches || '-'}</span>
                      <span>Weight (lbs): {weight_pounds || '-'}</span>
                    </StyledInfoContainer>
                  </StyledLink>
                </li>
              )
            }
          )}
        </ul>
      )}
      <StyledPaginationContainer>
        {players.length > 0 && (
          <Pagination
            page={sanitizedPage}
            onChange={handleChange}
            count={meta.total_pages}
            color="primary"
          />
        )}
      </StyledPaginationContainer>
    </>
  )
}

export default PlayersList
