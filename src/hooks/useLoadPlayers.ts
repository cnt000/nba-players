import { useEffect, useState } from 'react'
import { createHistory } from '@reach/router'

interface IMeta {
  total_pages: number
  current_page: number
  next_page: number
  per_page: number
  total_count: number
}

export const useLoadPlayers = (searchText: string, aPage: number) => {
  const [players, setPlayers] = useState([])

  const [meta, setMeta] = useState<IMeta>({
    total_pages: 1,
    current_page: 0,
    next_page: 1,
    per_page: 25,
    total_count: 1,
  })

  const history = createHistory(window as any)

  useEffect(() => {
    const loadData = async () => {
      const result = await fetch(
        `https://www.balldontlie.io/api/v1/players?search=${searchText}&page=${
          aPage
        }&per_page=25`
      )
      const { data, meta } = await result.json()
      setPlayers(data)
      setMeta(meta)
    }
    // if (searchText.length > 1) {
      loadData()
    // }
    history.navigate(`/?page=${aPage}&search=${searchText}`)
  }, [searchText, aPage])

  return { players, meta }
}
