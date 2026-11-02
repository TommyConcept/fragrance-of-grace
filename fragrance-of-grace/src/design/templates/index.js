// design/templates/index.js — every template the studio offers.

import { template1 } from './template1.js';
import { podcastBold } from './podcastBold.js';

export const TEMPLATES = [template1, podcastBold];
export const getTemplate = (id) => TEMPLATES.find((t) => t.id === id);
