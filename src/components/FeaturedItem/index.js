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
import Grid from 'material-ui/Grid';

import AbrilText from '../AbrilText';
import './FeaturedItem.css';

const FeaturedItem = (props) => (
  <div className="featured-item">
    <div className="price">{props.data.price}</div>
    <Grid container justify="flex-start">
      <Grid item xs={5} className="feature-image-wrapper">
        <img src={props.data.imageUrl} alt="featured item" />
      </Grid>
      <div className="featured-item-content">
        <AbrilText text={props.data.title} className="feature-heading" />
        <div className="feature-description-wrapper">
          <div className="description">
            <p>{props.data.quote}</p>
          </div>
          <div className="author">
            <img src={props.data.storeAvatarUrl} alt={props.data.storeName}/>
            {props.data.storeName}
          </div>
        </div>
      </div>
    </Grid>
  </div>
);

export default FeaturedItem
