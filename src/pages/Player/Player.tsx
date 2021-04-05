import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'

const Player: React.FC<{ path: string; id?: string }> = ({ path, id }) => {
  const [player, setPlayer] = useState<{
    first_name: string
    last_name: string
  }>({ first_name: '', last_name: '' })

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

  return (
    <Layout title={`Player ${id}`}>
      <div>
        <img
          src={`https://nba-players.herokuapp.com/players/${player.last_name.toLowerCase()}/${player.first_name.toLowerCase()}`}
          alt=""
        />
        <p>
          {player.first_name} {player.last_name}
        </p>
      </div>
    </Layout>
  )
}

export default Player
