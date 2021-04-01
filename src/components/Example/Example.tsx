import React from 'react'
import { StyledTitle } from '../Example/Example.styles'

type Props = {
  labels: Record<string, unknown>
  id: string
}

const Example: React.FC<Props> = ({ labels, id }: Props) => {
  return (
    <>
      <StyledTitle>
        hello compo {id}: {JSON.stringify(labels)}
      </StyledTitle>
      <button
        onClick={() => {
          window.alert('With typescript and Jest')
        }}
      >
        Test Button
      </button>
    </>
  )
}

export default Example
