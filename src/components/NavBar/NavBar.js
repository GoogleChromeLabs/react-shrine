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
import { withRouter } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { categories } from '../../utils/links';
import { getCategoryById } from '../../utils/utilities';
import './nav-bar.css';

const NavBar = ({ history, selected }) => {
  const navChangeHandler = (event, value) => {
    const category = getCategoryById(value);
    history.push(`/category/${category.name.toLowerCase()}`);
  };

  return (
    <Tabs
      className='nav-bar'
      value={selected.id}
      onChange={navChangeHandler}
      scrollButtons='auto'>
      { categories.map(category => (
        <Tab
          key={category.id}
          label={category.name}
          value={category.id} />
      )) }
    </Tabs>
  );
};

export default withRouter(NavBar);
