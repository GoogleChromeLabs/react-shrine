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
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MoreVertical from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';

import CategoryView from '../../containers/CategoryView';
import Logo from '../../logo.svg';
import LogoWithIcon from '../../logo-with-icon.svg';
import landingData from './LandingData';
import './Landing.css';

const styles = {
  white: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  logo: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  menuButton: {
    marginLeft: '-12px',
    marginRight: '20px',
  },
  listBackground: {
    paper: {
      backgroundColor: '#F3F3F3',
    }
  },
  list: {
    width: '250px',
  },
  listItemText: {
    flex: 1,
    textDecoration: 'none',
  }
};

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: landingData[0],
      value: landingData[0].id,
      drawerOpen: false
    }
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setCurrentSelectedItem(nextProps.match.params.category);
    }
  };

  componentWillMount() {
    if (this.props.match.params.category) {
      this.setCurrentSelectedItem(this.props.match.params.category);
    }
  };

  findItemByCategory = (category) => {
    const filteredCategory = landingData.filter((item) => item.category.toLowerCase() === category)
    return filteredCategory ? filteredCategory[0] : null
  };

  findItemByValue = (value) => {
    const item = landingData.filter((item) => item.id === value)[0];
    return item;
  };

  setCurrentSelectedItem = (category) => {
    const selectedCategory = this.findItemByCategory(category);
    this.setState(() => {
      return {
        selectedItem: selectedCategory || landingData[0],
        value: selectedCategory ? selectedCategory.id : landingData[0].id,
      }
    })
  };

  handleChange = (event, value) => {
    const { history } = this.props;
    const selectedItem = this.findItemByValue(value);
    history.push(`/category/${selectedItem.category.toLowerCase()}`);
    this.setState(previousState => {
      return {
        value: value,
        selectedItem: selectedItem
      }
    })
  };

  toggleDrawer = (value) => {
    if(window.innerWidth < 400) {
      this.setState({ drawerOpen: value });
    }
  };

  render() {
    const { classes } = this.props;
    const { value, selectedItem } = this.state;
    return (
      <div className="landing-screen">
        <Toolbar className={`${classes.white} landing-toolbar`}>
          <IconButton className={`${classes.menuButton} menu-button drawer-menu`} color="inherit" aria-label="Menu" onClick={() => this.toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <div className={`${classes.logo} logo`}>
            <img src={LogoWithIcon} alt="logo" className="large" />
            <img src={Logo} alt="logo" className="small" />
          </div>
          <div>
            <IconButton className={`${classes.menuButton} menu-button`} color="inherit" aria-label="Menu">
              <ShoppingCart />
            </IconButton>
            <IconButton className={`${classes.menuButton} menu-button`} color="inherit" aria-label="Menu">
              <MoreVertical />
            </IconButton>
          </div>
        </Toolbar>
        <Tabs
          value={value}
          onChange={this.handleChange}
          className={`${classes.flex} ${classes.white} navigation-toolbar`}
          scrollButtons="auto">
          {
            landingData.map((item) => (
              <Tab
                key={item.id}
                label={item.category}
                value={item.id} />
            ))
          }
        </Tabs>
        <Drawer open={this.state.drawerOpen} onClose={() => this.toggleDrawer(false)} className={classes.listBackground}>
          <div
            tabIndex={0}
            role="button"
            className={classes.list}
            onClick={() => this.toggleDrawer(false)}
            onKeyDown={() => this.toggleDrawer(false)}>
            <List>
              {
                landingData.map((item, index) => (
                  <ListItem
                    button
                    key={index}>
                    <Link to={`/category/${item.category.toLowerCase()}`} className={classes.listItemText}>
                      <ListItemText primary={item.category} />
                    </Link>
                  </ListItem>
                ))
              }
            </List>
          </div>
        </Drawer>
        <CategoryView selectedItem={selectedItem} />
      </div>
    )
  }
}

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(LandingPage));
