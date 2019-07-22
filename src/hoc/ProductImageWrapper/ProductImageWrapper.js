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
import CloseIcon from '@material-ui/icons/Close';

import AbrilText from '../../components/AbrilText/AbrilText';
import './product-image-wrapper.css';

const ProductImageWrapper = ({ children, title, close }) => (
  <div className='wrapper'>
    <div className='header'>
      <AbrilText text={title} />
      <CloseIcon className='close-icon' onClick={close} fontSize='large' />
    </div>
    <div>
      {children}
    </div>
  </div>
);

export default ProductImageWrapper;
