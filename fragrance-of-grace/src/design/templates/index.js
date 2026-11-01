// design/templates/index.js — every template the studio offers.
// Add your Figma designs here as they are converted.

import { podcastBold } from './podcastBold.js';

export const TEMPLATES = [podcastBold];
export const getTemplate = (id) => TEMPLATES.find((t) => t.id === id);
