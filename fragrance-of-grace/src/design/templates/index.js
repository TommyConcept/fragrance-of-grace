// design/templates/index.js — the five Fragrance of Grace templates.

import { template1 } from './template1.js';
import { template2 } from './template2.js';
import { template3 } from './template3.js';
import { template4 } from './template4.js';
import { template5 } from './template5.js';

export const TEMPLATES = [template1, template2, template3, template4, template5];
export const getTemplate = (id) => TEMPLATES.find((t) => t.id === id);
