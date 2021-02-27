import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import theme from './theme';
import Layout from './components/Layout';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
