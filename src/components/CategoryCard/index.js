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

import React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import AbrilText from '../AbrilText';
import './Card.css';

const CategoryCard = (props) => (
    <Grid item xs={12} sm={6} md={4} className="category-card-wrapper">
      <Link to={`/category/${props.category.toLowerCase()}/${props.data.id}`}>
        <Paper className="card" elevation={0}>
          <div className="price">{props.data.price}</div>
          <div className="card-content">
            <div className="item-image">
              <img src={props.data.imageUrl} alt="item" />
            </div>
            <AbrilText text={props.data.title} className="heading" />
            <div className="author">
              <img src={props.data.storeAvatarUrl} alt="author" />
              {props.data.storeName}
            </div>
          </div>
        </Paper>
      </Link>
    </Grid>
);

export default CategoryCard;
