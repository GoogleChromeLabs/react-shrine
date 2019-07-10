
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

import AbrilText from '../../components/AbrilText';
import './item-view-wrapper.css';

const ItemViewWrapper = ({ children, title, closed }) => {
  return (
    <div className="wrapper">
      <div className="header">
        <AbrilText text={title} />
        <CloseIcon className="close-icon" onClick={closed} fontSize="large" />
      </div>
      <div>
        {children}
      </div>
    </div>
  )
};

export default ItemViewWrapper;
