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

import './logo.css';
import logo from '../../assets/images/logo.svg';
import logoWithIcon from '../../assets/images/logo-with-icon.svg';

const Logo = () => (
  <div className='logo'>
    <Link to='/'>
      <img src={logo} alt='logo' className='small' />
      <img src={logoWithIcon} alt='logo' className='large' />
    </Link>
  </div>
);

export default Logo;
