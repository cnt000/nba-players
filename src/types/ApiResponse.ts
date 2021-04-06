export interface IPlayers {
  data?: IPlayer[]
  meta?: IMeta
}

export interface IPlayer {
  id: number
  first_name: string
  height_feet?: number | null
  height_inches?: number | null
  last_name: string
  position?: string
  team?: ITeam
  weight_pounds?: number | null
}

export interface ITeam {
  id?: number
  abbreviation?: string
  city?: string
  conference?: IConference
  division?: string
  full_name?: string
  name?: string
}

export enum IConference {
  East = 'East',
  West = 'West',
}

export interface IMeta {
  total_pages: number
  current_page: number
  next_page: number
  per_page: number
  total_count: number
}
