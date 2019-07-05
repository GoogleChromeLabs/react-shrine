/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import quicklink from 'quicklink/dist/quicklink.mjs';
import asyncComponent from './components/AsyncComponent';
import './App.css';

const AsyncLanding = asyncComponent(() => import('./containers/Landing'));
const AsyncItemView = asyncComponent(() => import('./containers/ItemView'));

class App extends Component {
  // when app is mounted for the first time
  componentDidMount() {
    this.quicklinkHandler();
  }

  // when app is rerendered after mounted
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.quicklinkHandler();
    }
  }

  quicklinkHandler = () => {
    console.log('ray : quicklink call');
    quicklink();
  };

  render() {
    return (
      <div className="app-wrapper">
        <Route exact path="/" component={AsyncLanding} />
        <Route exact path="/category/:category" component={AsyncLanding} />
        <Route exact path="/category/:category/:id" component={AsyncItemView} />
      </div>
    );
  }
}

export default withRouter(App);
