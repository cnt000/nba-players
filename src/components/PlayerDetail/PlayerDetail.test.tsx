import React from 'react'
import { render } from '../../test/testUtils'
import PlayerDetail from './PlayerDetail'
import { IPlayer } from '../../types/ApiResponse'
import { baseImagesUrl } from '../../conf/endpoints'

const player: IPlayer = {
  id: 1,
  first_name: 'Mike',
  last_name: 'Giordano',
  position: 'G',
}

const playerWithTeam = {
  ...player,
  team: {
    city: 'NYC',
    full_name: 'New York City Helixer',
  },
}

const Component = <PlayerDetail player={player} />

describe('PlayerDetail shows infos', () => {
  it('image src is correct', () => {
    const { getByRole } = render(Component, {})
    expect((getByRole('img') as HTMLImageElement).src).toEqual(`${baseImagesUrl}/Giordano/Mike`)
  })
  it('show position', () => {
    const { getByText } = render(Component, {})
    expect(getByText(/Position:(.*?)G/i)).toBeInTheDocument()
  })
  it('do not show team infos if is not present', () => {
    const { queryByText } = render(Component, {})
    expect(queryByText('Team')).not.toBeInTheDocument()
  })
  it('show team infos if is present', () => {
    const { getByText } = render(<PlayerDetail player={playerWithTeam} />, {})
    expect(getByText(/Name:(.*?)New York City Helixer/i)).toBeInTheDocument()
  })
})
