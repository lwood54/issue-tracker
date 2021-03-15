import React from 'react';
import './App.css';
import { Landing } from './pages';
import Nav from './layout/Nav';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import lightGreen from '@material-ui/core/colors/lightGreen';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: lightGreen[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav>
        <Landing />
      </Nav>
    </ThemeProvider>
  );
}

export default App;
