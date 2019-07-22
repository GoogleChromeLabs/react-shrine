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
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import './product-small-card.css';

const ProductSmallCard = ({ category, product }) => (
  <Link to={`/category/${category.toLowerCase()}/${product.id}`}>
    <Paper square elevation={0} className='product-small-card'>
      <img src={product.imageUrl} alt={product.title} />
    </Paper>
  </Link>
);

export default ProductSmallCard;
