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
import IconButton from '@material-ui/core/IconButton';
import ErrorOutline from '@material-ui/icons/ErrorOutline';

import AddCart from '../../../components/AddCart/AddCart';
import AbrilText from '../../../components/AbrilText/AbrilText';
import './product-summary.css';

const ProductSummary = ({ openDetailViewer, product }) => (
  <div className='product-summary'>
    <div onClick={openDetailViewer} className='image-container'>
      <img src={product.imageUrl} alt={product.title} />
      <IconButton className='info-outline' color='inherit' aria-label='Menu'>
        <ErrorOutline />
      </IconButton>
    </div>
    <div className='product-details-wrapper'>
      <AbrilText text={product.title} className='heading' />
      <div className='description'>{product.description}</div>
      <AddCart />
      <div className='store-description'>
        <div className='store-heading'>{product.storeName}</div>
        <div className='description'>{product.storeDescription}</div>
      </div>
    </div>
  </div>
);

export default ProductSummary;
