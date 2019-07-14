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

import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import AbrilText from '../../AbrilText/AbrilText';
import './product-card.css';

const ProductCard = ({ product, categoryName, smallSize }) => (
  <div className='product-card-wrapper'>
    <Link to={`/category/${categoryName.toLowerCase()}/${product.id}`}>
      <Paper square className='product-card' elevation={0}>
        { !smallSize && <div className='product-price'>{product.price}</div> }
        <div className='product-card-content'>
          <div className='product-image'>
            <img src={product.imageUrl} alt='product' />
          </div>
          { !smallSize && (
            <Fragment>
              <AbrilText text={product.title} className='product-title' />
              <div className='product-seller'>
                <img src={product.storeAvatarUrl} alt='seller' />
                {product.storeName}
              </div>
            </Fragment>
          ) }
        </div>
      </Paper>
    </Link>
  </div>
);

export default ProductCard;
