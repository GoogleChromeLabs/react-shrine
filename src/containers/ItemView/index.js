/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component, lazy, Fragment, Suspense } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MoreVertical from '@material-ui/icons/MoreVert';
import ErrorOutline from '@material-ui/icons/ErrorOutline';

import ItemViewCard from '../../components/ItemViewCard';
import AbrilText from '../../components/AbrilText';
import { getCategoryGroupByName, getDetailedProduct } from '../../utils/utilities';
import Logo from '../../logo.svg';
import LogoWithIcon from '../../logo-with-icon.svg';
import './ItemView.css';

const LazyAdaptiveItemView = lazy(() => {
  return new Promise(resolve => {
    navigator.connection ? resolve(navigator.connection.effectiveType) : resolve(null);
  }).then(
    effectiveType => {
      console.log('[LazyAdaptiveItemView] effectiveType => ', effectiveType);
      switch(effectiveType) {
        case '4g':
        case '3g':
          return import('../../components/ItemViewZoom');
        case '2g':
          return import('../../components/ItemViewStatic');
        default:
          return import('../../components/ItemViewStatic')
      }
    }
  );
});

const styles = {
  toolbar: {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #EEEEEE'
  },
  logo: {
    flex: 1,
    textAlign: 'center'
  }
};

class ItemView extends Component {
  state = {
    selectedCategory: null,
    selectedProduct: null,
    quantity: 1,
    productViewerOpened: false
  };

  componentDidMount() {
    const { match } = this.props;
    this.setItemDetails(match.params.category, match.params.id);
  }
  
  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (match !== prevProps.match) {
      this.setItemDetails(match.params.category, match.params.id);
    }
  }

  setItemDetails = (category, id) => {
    const selectedCategory = getCategoryGroupByName(category);
    this.setState({
        selectedCategory,
        selectedProduct: getDetailedProduct(category, id)
    });
  };

  quantityChangeHandler = event => {
    this.setState({quantity: event.target.value});
  };

  openCloseProductViewer = opened => {
    this.setState({productViewerOpened: opened});
  };

  render() {
    const { classes, history } = this.props;
    const { selectedProduct, selectedCategory, quantity, productViewerOpened } = this.state;

    if (!selectedProduct || !selectedCategory) {
      return <div>Loading...</div>;
    }

    const productSummary = (
      <Fragment>
        <div onClick={() => this.openCloseProductViewer(true)} className="image-container">
          <img src={selectedProduct.imageUrl} alt={selectedProduct.title} />
          <IconButton className="info-outline" color="inherit" aria-label="Menu">
            <ErrorOutline />
          </IconButton>
        </div>
        <div className="item-details-wrapper">
          <AbrilText text={selectedProduct.title} className="heading" />
          <div className="description">{selectedProduct.description}</div>
          <div className="add-cart">
            <Select
              value={quantity}
              onChange={this.quantityChangeHandler}
              className="selectbox"
              margin="none"
              disableUnderline>
              <MenuItem value={1}>Quantity 1</MenuItem>
              <MenuItem value={2}>Quantity 2</MenuItem>
              <MenuItem value={3}>Quantity 3</MenuItem>
              <MenuItem value={4}>Quantity 4</MenuItem>
              <MenuItem value={5}>Quantity 5</MenuItem>
            </Select>
            <Fab size="small" color="primary" aria-label="shopping-cart" className="button">
              <ShoppingCart />
            </Fab>
          </div>
          <div className="store-description">
            <div className="store-heading">{selectedProduct.storeName}</div>
            <div className="description">{selectedProduct.storeDescription}</div>
          </div>
        </div>
      </Fragment>
    );
    const productViewer = (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAdaptiveItemView product={selectedProduct} closeView={() => this.openCloseProductViewer(false)} />
      </Suspense>
    );
    const productDisplay = !productViewerOpened ? productSummary : productViewer;

    return (
      <div className="item-view-wrapper">
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => history.goBack()}>
            <ArrowBack />
          </IconButton>
          <div className={`${classes.logo} logo`}>
            <img src={LogoWithIcon} alt="logo" className="large" />
            <img src={Logo} alt="logo" className="small" />
          </div>
          <div>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <ShoppingCart />
            </IconButton>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MoreVertical />
            </IconButton>
          </div>
        </Toolbar>
        <div className="item-view-content">
          <Grid container spacing={0} className="grid">
            <Grid item md={12} lg={4} className="content item-list">
              <Grid container spacing={0}>
                { selectedCategory.items.map(item => (
                  <ItemViewCard category={selectedCategory.category} data={item} key={item.id} />
                )) }
              </Grid>
            </Grid>
            <Grid item md={12} lg={8} className="content item-display">
              {productDisplay}
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ItemView);
