/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import 'typeface-roboto';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import store, { history } from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// TODO: remove theme and use component-level css
const theme = createMuiTheme({
  palette: {
    secondary: cyan
  },
  overrides: {
    MuiIconButton: {
      label: {
        color: '#7C7C7C'
      }
    }
  }
});

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTop>
        <MuiThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </MuiThemeProvider>
      </ScrollToTop>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
