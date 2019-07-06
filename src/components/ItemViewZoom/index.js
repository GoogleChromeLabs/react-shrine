
import React from 'react';
import Magnifier from 'react-magnifier';

import { getDetailedProduct } from '../../utils/utility';

const ItemViewZoom = ({ match }) => {
  const categoryName = match.params.category;
  const productId = match.params.id;
  const detailedProduct = getDetailedProduct(categoryName, productId);
  return (
    <Magnifier src={detailedProduct.imageUrl} width={500} />
  );
};

export default ItemViewZoom;
