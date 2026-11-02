// design/templates/index.js — every template the studio offers.

import { template1 } from './template1.js';
import { template2 } from './template2.js';
import { template3 } from './template3.js';
import { podcastBold } from './podcastBold.js';

export const TEMPLATES = [template1, template2, template3, podcastBold];
export const getTemplate = (id) => TEMPLATES.find((t) => t.id === id);
