// design/templates/template7.js
// Converted from Figma: "Template 7" (node 93:216).
// Navy and gold blocks over a line-pattern background. This is the only
// template with no listen bar.

const MONT = "'Montserrat', sans-serif";
const NAVY = '#0B1B33';
const GOLD = '#C9A127';
const YELLOW = '#F9D155';
const BLUE = '#236DDC';

const MIC_CROP = { w: 170.58, h: 118.69, left: -70.58, top: -9.64 };

const elements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: -10, y: -169, w: 1099.33, h: 1649, src: '/templates/t7/bg.jpg', fit: 'cover' },

  { id: 'shape', type: 'image', name: 'Navy shape',
    x: 104, y: 105, w: 943, h: 475, src: '/templates/t7/shape.svg', fit: 'fill' },
  { id: 'bar-mid', type: 'shape', name: 'Navy bar',
    x: 119, y: 322, w: 928, h: 168, background: NAVY },
  { id: 'gold-block', type: 'shape', name: 'Gold block',
    x: 281, y: 565, w: 644, h: 349, background: GOLD },

  { id: 'photo', type: 'image', name: 'Photo',
    x: -266, y: 406, w: 842, h: 893, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'wash', type: 'shape', name: 'Foot wash',
    x: -245, y: 1008, w: 1569, h: 413, background: 'rgba(11,27,51,0.95)', blur: 100 },

  { id: 'bar-top', type: 'shape', name: 'Navy heading block',
    x: 119, y: 112, w: 841, h: 210, background: NAVY },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 302, y: 124, w: 412, text: 'NEW', fontFamily: MONT, fontSize: 155.104,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 170, y: 267, w: 676, text: 'EPISODE', fontFamily: MONT, fontSize: 142.815,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 412, y: 434, w: 434, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 37.041, fontWeight: 700, color: YELLOW, align: 'center', lineHeight: 1.247 },

  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 385, y: 615, w: 437, text: 'WHEN THEY', fontFamily: MONT, fontSize: 66.706,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 402, y: 657, w: 403, text: 'STOP', fontFamily: MONT, fontSize: 139.675,
    fontWeight: 900, color: BLUE, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 266, y: 800, w: 634, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 66.706,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.96 },

  { id: 'mic', type: 'image', name: 'Microphone',
    x: 841.65, y: 692.46, w: 397.946, h: 571.888, src: '/templates/t1/mic.webp',
    rotate: 0.13, flipY: true, crop: MIC_CROP },
];

// ── YouTube 1280x720 ──
const ytElements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: 0, y: 0, w: 1280, h: 1920, src: '/templates/t7/bg.jpg', fit: 'cover' },

  { id: 'bar-top', type: 'shape', name: 'Navy heading block',
    x: 40, y: 40, w: 620, h: 170, background: NAVY },
  { id: 'bar-mid', type: 'shape', name: 'Navy bar',
    x: 40, y: 210, w: 700, h: 120, background: NAVY },
  { id: 'gold-block', type: 'shape', name: 'Gold block',
    x: 40, y: 380, w: 620, h: 290, background: GOLD },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 660, y: 40, w: 640, h: 680, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 60, y: 48, w: 580, text: 'NEW', fontFamily: MONT, fontSize: 118,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 60, y: 160, w: 660, text: 'EPISODE', fontFamily: MONT, fontSize: 108,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 60, y: 318, w: 660, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 32, fontWeight: 700, color: YELLOW, align: 'center', lineHeight: 1.247 },

  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 60, y: 404, w: 580, text: 'WHEN THEY', fontFamily: MONT, fontSize: 54,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 60, y: 440, w: 580, text: 'STOP', fontFamily: MONT, fontSize: 112,
    fontWeight: 900, color: BLUE, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 60, y: 580, w: 580, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 54,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.96 },

  { id: 'mic', type: 'image', name: 'Microphone',
    x: 940, y: 330, w: 330, h: 474, src: '/templates/t1/mic.webp',
    rotate: 0.13, flipY: true, crop: MIC_CROP },
];

export const template7 = {
  id: 'template-7',
  name: 'Template 7 — Block Stack',
  description: 'Navy and gold blocks, blue headline accent.',
  layouts: {
    'post-1080x1250': { background: NAVY, elements },
    'yt-1280x720':    { background: NAVY, elements: ytElements },
  },
};
