import { useEffect, useState } from 'react'
import { IPlayer } from '../types/ApiResponse'
import { baseAPIUrl } from '../conf/endpoints'

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
      const result = await fetch(`${baseAPIUrl}/${id}`)
      const data = await result.json()
      setPlayer(data)
      setLoading(false)
    }
    setLoading(true)
    loadData()
  }, [id])

  return { player, loading }
}
