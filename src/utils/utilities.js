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

import { products } from './links';

const getCategoryGroupByName = category => {
  return products.find(categoryGroup => categoryGroup.category.toLowerCase() === category.toLowerCase());
};

const getCategoryGroupById = id => {
  return products.find(categoryGroup => categoryGroup.id.toString() === id.toString());
};

const getDetailedProduct = (category, id) => {
  const categoryGroup = getCategoryGroupByName(category);
  const detailedProduct = categoryGroup.items.find(item => item.id.toString() === id.toString());
  return detailedProduct;
};

export { getCategoryGroupByName, getCategoryGroupById, getDetailedProduct };
 