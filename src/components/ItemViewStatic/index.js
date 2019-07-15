
import React from 'react';

import ItemViewWrapper from '../../hoc/ItemViewWrapper';

const ItemViewStatic = ({ product, closeView }) => {
  return (
    <ItemViewWrapper title={product.title} closed={closeView}>
      <img src={product.imageUrl} width={500} alt="product" />
    </ItemViewWrapper>
  );
};

export default ItemViewStatic;
