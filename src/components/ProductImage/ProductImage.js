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

import React, { lazy, Fragment, Suspense } from 'react';

const LazyAdaptiveProductImage = lazy(() => {
  return new Promise(resolve => {
    navigator.connection ? resolve(navigator.connection.effectiveType) : resolve(null);
  }).then(
    effectiveType => {
      console.log('[LazyAdaptiveProductImage] effectiveType => ', effectiveType);
      switch(effectiveType) {
        case '4g':
        case '3g':
          return import(/* webpackChunkName: 'product-zoom-image' */ './ProductZoomImage/ProductZoomImage');
        case '2g':
        case 'slow-2g':
          return import(/* webpackChunkName: 'product-plain-image' */ './ProductPlainImage/ProductPlainImage');
        default:
          return import(/* webpackChunkName: 'product-zoom-image' */ './ProductZoomImage/ProductZoomImage');
      }
    }
  );
});

const ProductImage = ({ ...rest }) => (
  <Suspense fallback={<Fragment>Loading...</Fragment>}>
    <LazyAdaptiveProductImage { ...rest } />
  </Suspense>
);

export default ProductImage;
