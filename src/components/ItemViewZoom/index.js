
import React from 'react';
import Magnifier from 'react-magnifier';

import ItemViewWrapper from '../../hoc/ItemViewWrapper';

const ItemViewZoom = ({ product, closeView }) => {
  return (
    <ItemViewWrapper title={product.title} closed={closeView}>
      <Magnifier src={product.imageUrl} width={500} />
    </ItemViewWrapper>
  );
};

export default ItemViewZoom;
