import React from 'react'
import { IPlayer } from '../../types/ApiResponse'
import {
  StyledImgContainer,
  StyledInfoContainer,
  StyledRowContainer,
} from './PlayerDetail.styles'

const PlayerDetail: React.FC<{ player: IPlayer }> = ({ player }) => {
  const {
    first_name,
    last_name,
    position,
    height_feet,
    height_inches,
    weight_pounds,
    team,
  } = player

  return (
    <>
      <StyledImgContainer>
        <img
          src={`https://nba-players.herokuapp.com/players/${last_name}/${first_name}`}
          alt={`${first_name} ${last_name}`}
          loading="lazy"
        />
      </StyledImgContainer>
      <StyledRowContainer>
        <StyledInfoContainer>
          <strong>Info:</strong>
          <span>Position: {position || '-'}</span>
          <span>Height (ft): {height_feet || '-'}</span>
          <span>Height (in): {height_inches || '-'}</span>
          <span>Weight (lbs): {weight_pounds || '-'} </span>
        </StyledInfoContainer>
        {team?.full_name && (
          <StyledInfoContainer>
            <strong>Team:</strong>
            <span>Name: {team.full_name}</span>
            <span>City: {team?.city || '-'}</span>
            <span>Conference: {team?.conference || '-'}</span>
            <span>Division: {team?.division || '-'}</span>
          </StyledInfoContainer>
        )}
      </StyledRowContainer>
    </>
  )
}

export default PlayerDetail
