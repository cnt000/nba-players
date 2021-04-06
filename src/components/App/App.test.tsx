import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { theme } from '../../styles/theme'

test('renders title of application', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )

  expect(getByText(/Players/i)).toBeInTheDocument()
})
