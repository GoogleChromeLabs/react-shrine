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

import AbrilText from '../AbrilText/AbrilText';
import './featured-product.css';

const FeaturedProduct = ({ product }) => (
  <div className='featured-product'>
    <div className='featured-product-price'>
      {product.price}
    </div>
    {/* TODO: not use Grid if possible */}
    <Grid container justify='flex-start'>
      <Grid item xs={5} className='featured-product-image-wrapper'>
        <img src={product.imageUrl} alt='featured product' />
      </Grid>
      <div className='featured-product-content'>
        <AbrilText text={product.title} className='featured-product-title' />
        <div className='featured-product-description-wrapper'>
          <div className='featured-product-description'>
            <p>{product.quote}</p>
          </div>
          <div className='featured-product-seller'>
            <img src={product.storeAvatarUrl} alt={product.storeName}/>
            {product.storeName}
          </div>
        </div>
      </div>
    </Grid>
  </div>
);

export default FeaturedProduct;
