import React from 'react'
import { render, fireEvent } from '../../test/testUtils'
import PlayersList from './PlayersList'
import { baseImagesUrl } from '../../conf/endpoints'
import { IPlayer } from '../../types/ApiResponse'

const players = [
  {
    id: 14,
    first_name: 'Ike',
    height_feet: null,
    height_inches: null,
    last_name: 'Anigbogu',
    position: 'C',
    weight_pounds: null,
  },
  {
    id: 25,
    first_name: 'Ron',
    height_feet: null,
    height_inches: null,
    last_name: 'Baker',
    position: 'G',
    weight_pounds: null,
  },
]

const meta = {
  total_pages: 3,
  current_page: 1,
  next_page: 2,
  per_page: 25,
  total_count: 72,
}

const emptyPlayers: IPlayer[] = []

const setPage = jest.fn()

const Component = (
  <PlayersList
    players={players}
    meta={meta}
    sanitizedPage={1}
    setPage={setPage}
  />
)

describe('PlayersList shows players', () => {
  it('first image src is correct', () => {
    const { queryAllByRole } = render(Component, {})
    expect((queryAllByRole('img')[0] as HTMLImageElement).src).toEqual(
      `${baseImagesUrl}/Anigbogu/Ike`
    )
  })
  it('show position', () => {
    const { queryAllByText } = render(Component, {})
    expect(queryAllByText(/Position:(.*?)C/i)[0]).toBeInTheDocument()
  })
  it('show first and last name', () => {
    const { queryByText } = render(Component, {})
    expect(queryByText('Ike Anigbogu')).toBeInTheDocument()
  })
  it('show link to player detail with correct href', () => {
    const { getByRole } = render(Component, {})
    expect(
      (getByRole('link', { name: /Ike Anigbogu/ }) as HTMLAnchorElement).href
    ).toMatch(/\/player\/14/)
  })
  it('Click on page dispatch setPage', () => {
    const { getByRole } = render(Component, {})
    fireEvent.click(getByRole('button', { name: /page 1/ }))
    expect(setPage).toHaveBeenCalledWith(1)
  })
  it('emtpy list show empty message', () => {
    const { getByText } = render(
      <PlayersList
        players={emptyPlayers}
        meta={meta}
        sanitizedPage={1}
        setPage={setPage}
      />,
      {}
    )
    expect(getByText('No results')).toBeInTheDocument()
  })
})
