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

// TODO: improve the modularity in using this component
import React from 'react';
import Typography from '@material-ui/core/Typography';

import './abril-text.css';

const AbrilText = ({ text, className, ...rest }) => (
  <Typography className={`abril-font ${className}`} {...rest}>
    {text}
  </Typography>
);

export default AbrilText;
