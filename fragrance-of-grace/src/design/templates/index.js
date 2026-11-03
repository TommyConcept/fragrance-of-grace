// design/templates/index.js — the nine Fragrance of Grace templates.

import { template1 } from './template1.js';
import { template2 } from './template2.js';
import { template3 } from './template3.js';
import { template4 } from './template4.js';
import { template5 } from './template5.js';
import { template6 } from './template6.js';
import { template7 } from './template7.js';
import { template8 } from './template8.js';
import { template9 } from './template9.js';

export const TEMPLATES = [
  template1, template2, template3, template4, template5,
  template6, template7, template8, template9,
];
export const getTemplate = (id) => TEMPLATES.find((t) => t.id === id);
