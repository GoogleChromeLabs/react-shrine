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
import Grid from '@material-ui/core/Grid';

import FeaturedItem from '../../components/FeaturedItem';
import CategoryCard from '../../components/CategoryCard';
import './CategoryView.css';

class CategoryView extends Component {
  render() {
    const { selectedItem } = this.props;
    return (
      <div>
        <Grid container spacing={0} direction="column">
          <FeaturedItem data={selectedItem.featuredItem} />
        </Grid>
        <Grid container spacing={0} className="category-cards" justify="center">
          {
            selectedItem.items.map((item, index) => (
              <CategoryCard data={item} category={selectedItem.category} key={index}/>
            ))
          }
        </Grid>
      </div>
    )
  }
}

export default CategoryView;
