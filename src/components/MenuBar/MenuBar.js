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

import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MoreVertical from '@material-ui/icons/MoreVert';
import ArrowBack from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from '../Logo/Logo';
import MenuDrawer from './MenuDrawer/MenuDrawer';
import './menu-bar.css';

const MenuBar = ({ history, isArrowBackVisible, selected }) => {
  const [isDrawerOpen, setDrawerStatus] = useState(false);

  const toggleDrawerHandler = flag => {
    setDrawerStatus(flag);
  };

  return (
    <Fragment>
      <AppBar elevation={0} color='default' position='static'>
        <Toolbar className='toolbar'>
          { isArrowBackVisible ? (
            <IconButton className='drawer-back' color='inherit' aria-label='Menu' onClick={() => history.goBack()} >
              <ArrowBack />
            </IconButton>  
          ) : (
            <IconButton className='drawer-menu' color='inherit' aria-label='Menu' onClick={() => toggleDrawerHandler(true)}>
              <MenuIcon />
            </IconButton>
          ) }
          <Logo />
          <IconButton className='menu-button' color='inherit' aria-label='Menu'>
            <ShoppingCart />
          </IconButton>
          <IconButton className='menu-button' color='inherit' aria-label='Menu'>
            <MoreVertical />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MenuDrawer open={isDrawerOpen} selected={selected} close={() => toggleDrawerHandler(false)} />
    </Fragment>
  );
};

export default withRouter(MenuBar);
