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
import Grid from '@material-ui/core/Grid';

import ProductSmallCard from './ProductSmallCard/ProductSmallCard';

const ProductSmallCardList = ({ category }) => (
  <Grid container spacing={0}>
    { category.products.map(product => (
      <Grid key={product.id} item xs={6} sm={3} lg={6}>
        <ProductSmallCard category={category.name} product={product} />
      </Grid>
    )) }
  </Grid>
);

export default ProductSmallCardList;
