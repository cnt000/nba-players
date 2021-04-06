import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { store } from '../../state/store'
import App from './App'
import { theme } from '../../styles/theme'

test('renders title of application', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  )

  expect(getByText(/Players/i)).toBeInTheDocument()
})
