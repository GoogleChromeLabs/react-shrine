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

import ProductCard from './ProductCard/ProductCard';
import './product-card-list.css';

const ProductCardList = ({ category }) => (
  <Grid container className='product-card-list' justify='center'>
    {category.products.map(product => (
      <Grid key={product.id} item xs={12} sm={6} md={4}>
        <ProductCard product={product} categoryName={category.name} />
      </Grid>
    ))}
  </Grid>
);

export default ProductCardList;
