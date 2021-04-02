import React from 'react'
import { useLocation } from '@reach/router'
import Layout from '../../components/Layout'

const Home: React.FC<{ path: string }> = () => {
  const location = useLocation()
  const urlParams = new URLSearchParams(location.search)
  const search = urlParams.get('search') || ''

  return (
    <Layout title={`Home ${search}`}>
      <p>ciao</p>
    </Layout>
  )
}

export default Home
