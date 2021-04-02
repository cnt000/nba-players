import React from 'react'
import Layout from '../../components/Layout'

const Player: React.FC<{ path: string; id?: string }> = ({ path, id }) => (
  <Layout title={`Player ${id}`}>
    <p>ciao</p>
  </Layout>
)

export default Player
