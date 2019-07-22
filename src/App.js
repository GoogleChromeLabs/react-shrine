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

import React, { useEffect, lazy, Suspense, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import quicklink from 'quicklink/dist/quicklink.mjs';

import './App.css';

const LazyLanding = lazy(() => import(/* webpackChunkName: "landing" */ './containers/Landing/Landing'));
const LazySaleProducts = lazy(() => import(/* webpackChunkName: "sale-products" */ './containers/SaleProducts/SaleProducts'));

const App = ({ location }) => {
  useEffect(() => {
    console.log('[App] quicklink call');
    quicklink();
  }, [location.pathname]);

  return (
    <div className='app-wrapper'>
      <Suspense fallback={<Fragment>Loading...</Fragment>}>
        <Route exact path='/category/:categoryName/:productId' component={LazySaleProducts} />
        <Route exact path='/category/:categoryName' component={LazyLanding} />
        <Route exact path='/' component={LazyLanding} />
      </Suspense>
    </div>
  );
};

export default withRouter(App);
