// src/App.js
import React from 'react';
import { GlobalStyle } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import VoteList from './components/VoteList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <VoteList />
    </ThemeProvider>
  );
}

export default App;