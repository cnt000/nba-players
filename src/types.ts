export interface Players {
  data?: Player[]
  meta?: Meta
}

export interface Player {
  id: number
  firstName: string
  heightFeet?: number | null
  heightInches?: number | null
  lastName: string
  position?: string
  team?: Team
  weightPounds?: number | null
}

export interface Team {
  id?: number
  abbreviation?: string
  city?: string
  conference?: Conference
  division?: string
  fullName?: string
  name?: string
}

export enum Conference {
  East = 'East',
  West = 'West',
}

export interface Meta {
  totalPages?: number
  currentPage?: number
  nextPage?: number
  perPage?: number
  totalCount?: number
}
