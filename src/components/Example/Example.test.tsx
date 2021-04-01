import React from 'react'
import { render } from '../../test/testUtils'
import Example from './Example'

const labels = {
  testLabel: 'hello king'
}

const Component = <Example id={'test'} labels={labels} />

describe('Example', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(Component, {})
    expect(asFragment()).toMatchSnapshot()
  })

  // it('clicking button triggers alert', () => {
  //   const { getByText } = render(Component, {})
  //   window.alert = jest.fn()
  //   fireEvent.click(getByText('Test Button'))
  //   expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  // })
})
