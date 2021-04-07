import { useEffect, useState } from 'react'
import { IPlayer } from '../types/ApiResponse'

export const useLoadPlayer = (id: number) => {
  const [player, setPlayer] = useState<IPlayer>({
    id,
    first_name: '',
    last_name: '',
    position: '',
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      const result = await fetch(
        `https://www.balldontlie.io/api/v1/players/${id}`
      )
      const data = await result.json()
      setPlayer(data)
      setLoading(false)
    }
    setLoading(true)
    loadData()
  }, [id])

  return { player, loading }
}
