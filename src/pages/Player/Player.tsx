import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import {
  StyledImgContainer,
  StyledInfoContainer,
  StyledRowContainer,
} from './Player.styles'
import { IPlayer } from '../../types/ApiResponse'

const Player: React.FC<{ path: string; id?: string }> = ({ path, id }) => {
  const [player, setPlayer] = useState<IPlayer>({
    id: 0,
    first_name: '',
    last_name: '',
    position: '',
  })

  useEffect(() => {
    const loadData = async () => {
      const result = await fetch(
        `https://www.balldontlie.io/api/v1/players/${id}`
      )
      const data = await result.json()
      setPlayer(data)
    }
    loadData()
  }, [id])

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
    <Layout title={`${first_name} ${last_name}`}>
      <div>
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
            {position && <span>Position: {position}</span>}
            {height_feet && <span>Height (ft): {height_feet}</span>}
            {height_inches && <span>Height (in): {height_inches}</span>}
            {weight_pounds && <span>Weight (lbs): {weight_pounds} </span>}
          </StyledInfoContainer>
          {team?.full_name && (
            <StyledInfoContainer>
              <strong>Team:</strong>
              <span>Name: {team?.full_name}</span>
              <span>City: {team?.city}</span>
              <span>Conference: {team?.conference}</span>
              <span>Division: {team?.division}</span>
            </StyledInfoContainer>
          )}
        </StyledRowContainer>
      </div>
    </Layout>
  )
}

export default Player
