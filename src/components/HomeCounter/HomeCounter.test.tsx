import React from 'react'
import { render } from '../../test/testUtils'
import HomeCounter from './HomeCounter'

const Component = <HomeCounter />

describe('Counter', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(Component, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
