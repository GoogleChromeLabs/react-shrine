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

import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import './add-cart.css';

const AddCart = () => {
  const [quantity, setQuantity] = useState(1);
  const quantityChangeHandler = event => {
    setQuantity(event.target.value);
  };

  return (
    <div className='add-cart'>
      <Select
        value={quantity}
        onChange={quantityChangeHandler}
        className='selectbox'
        margin='none'
        disableUnderline>
        <MenuItem value={1}>Quantity 1</MenuItem>
        <MenuItem value={2}>Quantity 2</MenuItem>
        <MenuItem value={3}>Quantity 3</MenuItem>
        <MenuItem value={4}>Quantity 4</MenuItem>
        <MenuItem value={5}>Quantity 5</MenuItem>
      </Select>
      <Fab size='small' color='secondary' aria-label='shopping-cart' className='button'>
        <ShoppingCart />
      </Fab>
    </div>
  );
};

export default AddCart;
