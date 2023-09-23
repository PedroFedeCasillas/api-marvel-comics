import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './App';
import { store } from './state';
import { GlobalStyle, Theme } from './styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
