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

import React, { useState, useEffect } from 'react';

import MenuBar from '../../components/MenuBar/MenuBar';
import NavBar from '../../components/NavBar/NavBar';
import CategoryProducts from './CategoryProducts/CategoryProducts';
import { categories } from '../../utils/links';
import { getCategoryByName } from '../../utils/utilities';
import './landing.css';

const Landing = ({ match }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  useEffect(() => {
    const categoryName = match.params.categoryName;
    const category = getCategoryByName(categoryName);
    setSelectedCategory(category);
  }, [match.params.categoryName]);

  return (
    <div className='landing-screen'>
      <MenuBar selected={selectedCategory} />
      <NavBar selected={selectedCategory} />
      <CategoryProducts selected={selectedCategory} />
    </div>
  )
};

export default Landing;
