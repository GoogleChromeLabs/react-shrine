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

import React, { useState, useEffect, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

import ProductSummary from './ProductSummary/ProductSummary';
import ProductImage from '../../components/ProductImage/ProductImage';
import MenuBar from '../../components/MenuBar/MenuBar';
import { getCategoryByName, getDetailedProduct } from '../../utils/utilities';
import './sale-products.css';
import ProductSmallCardList from '../../components/ProductSmallCardList/ProductSmallCardList';

const SaleProducts = ({ match }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductImageOpen, setProductImageStatus] = useState(false);

  useEffect(() => {
    const categoryName = match.params.categoryName;
    const productId = match.params.productId;
    const category = getCategoryByName(categoryName);
    setSelectedCategory(category);
    setSelectedProduct(getDetailedProduct(categoryName, productId));
  }, [match.params.categoryName, match.params.productId]);

  if (!selectedProduct || !selectedCategory) {
    return <Fragment>Loading...</Fragment>;
  }

  const productDisplay = !isProductImageOpen ?
    <ProductSummary product={selectedProduct} openDetailViewer={() => setProductImageStatus(true)} /> :
    <ProductImage product={selectedProduct} close={() => setProductImageStatus(false)} />;
  
  return (
    <div className='product-view-wrapper'>
      <MenuBar selected={selectedCategory} isArrowBackVisible={true} />
      <div className='product-view-content'>
        <Grid container spacing={0} className='grid'>
          <Grid item md={12} lg={4} className='content product-list'>
            <ProductSmallCardList category={selectedCategory} />
          </Grid>
          <Grid item md={12} lg={8} className='content product-display'>
            {productDisplay}
          </Grid>
        </Grid>
      </div>
    </div>
  )
};

export default SaleProducts;
