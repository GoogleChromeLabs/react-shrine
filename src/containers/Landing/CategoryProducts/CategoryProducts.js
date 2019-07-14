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

import FeaturedProduct from '../../../components/FeaturedProduct/FeaturedProduct';
import ProductCardList from '../../../components/ProductCardList/ProductCardList';

const CategoryProducts = ({ selected }) => (
  <Fragment>
    <FeaturedProduct product={selected.featuredProduct} />
    <ProductCardList category={selected} />
  </Fragment>
);

export default CategoryProducts;
