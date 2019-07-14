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

import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './menu-drawer.css';
import { categories } from '../../../utils/links';

const MenuDrawer = ({ close, selected, ...rest }) => (
  <Drawer onClose={close} {...rest}>
    <div
      tabIndex={0}
      role='button'
      className='drawer-list'
      onClick={close}
      onKeyDown={close}>
      <List>
        {categories.map(category => (
          <Link to={`/category/${category.name.toLowerCase()}`} className='drawer-list-item' key={category.id}>
            <ListItem
              button
              selected={selected.name === category.name}>
              <ListItemText secondary={category.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  </Drawer>
);

export default MenuDrawer;
