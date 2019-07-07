
import React from 'react';

import { getDetailedProduct } from '../../utils/utilities';

const ItemViewStatic = ({ match }) => {
  const categoryName = match.params.category;
  const productId = match.params.id;
  const detailedProduct = getDetailedProduct(categoryName, productId);
  return (
    <img src={detailedProduct.imageUrl} width={500} alt="product" />
  );
};

export default ItemViewStatic;
