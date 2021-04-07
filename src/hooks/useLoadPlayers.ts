import { useEffect, useState } from 'react'
import { createHistory } from '@reach/router'
import { IPlayer, IMeta } from '../types/ApiResponse'
import { baseAPIUrl } from '../conf/endpoints'

export const useLoadPlayers = (searchText: string, aPage: number) => {
  const [players, setPlayers] = useState<IPlayer[]>([])
  const [loading, setLoading] = useState(false)

  const [meta, setMeta] = useState<IMeta>({
    total_pages: 1,
    current_page: 0,
    next_page: 1,
    per_page: 25,
    total_count: 1,
  })

  useEffect(() => {
    const history = createHistory(window as any)
    const loadData = async () => {
      const result = await fetch(
        `${baseAPIUrl}?search=${searchText}&page=${aPage}&per_page=25`
      )
      const { data, meta } = await result.json()
      setPlayers(data)
      setMeta(meta)
      setLoading(false)
    }
    setLoading(true)
    loadData()
    history.navigate(`/?page=${aPage}&search=${searchText}`)
  }, [searchText, aPage])

  return { players, meta, loading }
}
