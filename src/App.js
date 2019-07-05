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

import React, { Component, lazy, Suspense } from 'react';
import { Route, withRouter } from 'react-router-dom';
import quicklink from 'quicklink/dist/quicklink.mjs';

import './App.css';

const LazyLanding = lazy(() => import('./containers/Landing'));
const LazyItemView = lazy(() => import('./containers/ItemView'));
// ray test touch <
const LazyAdaptiveItemView = lazy(() => {
  return new Promise(resolve => {
    navigator.connection ? resolve(navigator.connection.effectiveType) : resolve(null);
  }).then(
    effectiveType => {
      console.log('ray : ***** effectiveType => ', effectiveType);
      switch(effectiveType) {
        case '4g': 
          return import('./components/ItemViewZoom');
        case '3g':
        case '2g':
          return import('./components/ItemViewStatic');
        default:
          return import('./components/ItemViewStatic')
      }
    }
  );
});
// ray test touch >

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
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={LazyLanding} />
          <Route exact path="/category/:category" component={LazyLanding} />
          <Route exact path="/category/:category/:id" component={LazyItemView} />
          {/* ray test touch < */}
          <Route exact path="/category/:category/:id/zoom" component={LazyAdaptiveItemView} />
          {/* ray test touch > */}
        </Suspense>
      </div>
    );
  }
}

export default withRouter(App);
