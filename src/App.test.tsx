import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './app/store';
import App from './App';
import { theme } from './theme'

test('renders learn react link', () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
