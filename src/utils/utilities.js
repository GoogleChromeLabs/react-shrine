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

import { categories } from './links';

const getCategoryByName = name => {
  if (name) {
    return categories.find(category => category.name.toLowerCase() === name.toLowerCase());
  } else {
    return categories[0];
  }
};

const getCategoryById = id => {
  return categories.find(category => category.id.toString() === id.toString());
};

const getDetailedProduct = (category, id) => {
  const categoryDetails = getCategoryByName(category);
  const detailedProduct = categoryDetails.products.find(product => product.id.toString() === id);
  return detailedProduct;
};

export { getCategoryByName, getCategoryById, getDetailedProduct };
