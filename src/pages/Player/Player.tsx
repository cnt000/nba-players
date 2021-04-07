import React from 'react'
import Layout from '../../components/Layout'
import { StyledLoadingBlock } from './Player.styles'
import { useLoadPlayer } from '../../hooks/useLoadPlayer'
import PlayerDetail from '../../components/PlayerDetail'

const Player: React.FC<{ path: string; id?: string }> = ({ path, id }) => {
  const idOrOne = +(id || 1)
  const sanitizedId = /[0-9]+/.test(idOrOne.toString()) ? idOrOne : 1
  const { player, loading } = useLoadPlayer(sanitizedId)
  const { first_name, last_name } = player

  return (
    <Layout title={`${first_name} ${last_name}`}>
      <div>
        {loading && <StyledLoadingBlock>Loading...</StyledLoadingBlock>}
        {!loading && <PlayerDetail player={player} />}
      </div>
    </Layout>
  )
}

export default Player
