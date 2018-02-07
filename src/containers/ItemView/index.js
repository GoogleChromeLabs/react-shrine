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

 import React, { Component } from 'react';
import Logo from '../../logo.svg';
import LogoWithIcon from '../../logo-with-icon.svg';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui-icons/ArrowBack';
import ShoppingCart from 'material-ui-icons/ShoppingCart';
import MoreVertical from 'material-ui-icons/MoreVert';
import InfoOutline from 'material-ui-icons/InfoOutline';
import Grid from 'material-ui/Grid';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import landingData from '../../containers/Landing/LandingData';
import ItemViewCard from '../../components/ItemViewCard';
import AbrilText from '../../components/AbrilText';
import './ItemView.css';

const styles = {
  toolbar: {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #EEEEEE',
  },
  logo: {
    flex: 1,
    textAlign: 'center',
  },
};

class ItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: {},
      viewedItem: {},
      quantity: 1,
    }
  }

  findItemByCategory = (category) => {
    return landingData.filter((item) => item.category.toLowerCase() === category)
  }

  findCurrentViewedItem = (currentCategory, id) => {
    return currentCategory.items.find((item) => item.id.toString() === id)
  }

  setItemDetails = (category, id) => {
    const selectedCategory = this.findItemByCategory(category)[0];
    this.setState((previousState) => {
      return {
        selectedCategory: selectedCategory,
        viewedItem: this.findCurrentViewedItem(selectedCategory, id),
      }
    });
  }

  handleQuantityChange = (event) => {
    this.setState({ quantity: event.target.value})
  }

  componentWillReceiveProps(nextProps) {
    this.setItemDetails(nextProps.match.params.category, nextProps.match.params.id);
  }

  componentWillMount() {
    this.setItemDetails(this.props.match.params.category, this.props.match.params.id);
  }

  render() {
    const { classes, history } = this.props;
    const { viewedItem } = this.state;
    console.log(this.props);
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
                {
                  this.state.selectedCategory.items.map((item) => (
                    <ItemViewCard category={this.state.selectedCategory.category} data={item} key={item.id} />
                  ))
                }
              </Grid>
            </Grid>
            <Grid item md={12} lg={8} className="content item-display">
              <div>
                <div className="image-container">
                  <img src={viewedItem.imageUrl} alt={viewedItem.title} />
                  <IconButton className="info-outline" color="inherit" aria-label="Menu">
                    <InfoOutline />
                  </IconButton>
                </div>
                <div className="item-details-wrapper">
                  <AbrilText text={viewedItem.title} className="heading" />
                  <div className="description">{viewedItem.description}</div>
                  <div className="add-cart">
                    <Select
                      value={this.state.quantity}
                      onChange={this.handleQuantityChange}
                      className="selectbox"
                      margin="none"
                      disableUnderline
                    >
                      <MenuItem value={1}>Quantity 1</MenuItem>
                      <MenuItem value={2}>Quantity 2</MenuItem>
                      <MenuItem value={3}>Quantity 3</MenuItem>
                      <MenuItem value={4}>Quantity 4</MenuItem>
                      <MenuItem value={5}>Quantity 5</MenuItem>
                    </Select>
                    <Button fab mini color="primary" aria-label="add" className="button">
                      <ShoppingCart />
                    </Button>
                  </div>
                  <div className="store-description">
                    <div className="store-heading">{viewedItem.storeName}</div>
                    <div className="description">{viewedItem.storeDescription}</div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ItemView);
