// design/templates/template5.js
// Converted from Figma: "Template 5" (node 1:99).
// Centred layout with a translucent glass panel holding the headline.
// Every image is shared with Template 1.

const MONT = "'Montserrat', sans-serif";
const NAVY = '#0B1B33';
const GOLD = '#C9A127';
const SOFT_RED = '#DB5757';
const TINT = 'rgba(175,223,235,0.57)';
const GLASS = 'rgba(11,27,51,0.2)';

const MIC_CROP = { w: 170.58, h: 118.69, left: -70.58, top: -9.64 };

const elements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: -21, y: 0, w: 1121, h: 1401, src: '/templates/t1/bg-overlay.jpg', fit: 'cover', opacity: 0.9 },
  { id: 'tint', type: 'shape', name: 'Colour wash',
    x: -30, y: 0, w: 1178, h: 1291, background: TINT },

  // This one is rotated but not mirrored, unlike the other templates.
  { id: 'mic', type: 'image', name: 'Microphone',
    x: -77.55, y: 228.61, w: 397.946, h: 571.888, src: '/templates/t1/mic.webp',
    rotate: 168.63, crop: MIC_CROP },

  { id: 'bg-pattern', type: 'image', name: 'Background pattern',
    x: -42, y: -473, w: 1178, h: 1728.94, src: '/templates/t5/bg.jpg', fit: 'cover' },
  { id: 'bg-pattern-2', type: 'image', name: 'Background pattern top',
    x: -42, y: -473, w: 1178, h: 995, src: '/templates/t5/bg.jpg',
    crop: { w: 100, h: 173.76, left: -0.01, top: 47.1 } },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 145, y: 413, w: 789.04, h: 837, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 393.48, y: 32, w: 293, text: 'NEW', fontFamily: MONT, fontSize: 110.43,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 278, y: 126.56, w: 523, text: 'EPISODE', fontFamily: MONT, fontSize: 110.43,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },

  { id: 'pill-bg', type: 'shape', name: 'Season bar',
    x: 305.61, y: 260.45, w: 467.77, h: 57.74, background: GOLD },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 355.82, y: 269.65, w: 368, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 31.391, fontWeight: 700, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },

  // Translucent navy with a white outline — the headline reads through it.
  { id: 'card', type: 'shape', name: 'Glass panel',
    x: 168, y: 931, w: 743, h: 305, background: GLASS, radius: 20,
    border: 3, borderColor: '#FFFFFF' },
  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 321, y: 942, w: 437, text: 'WHEN THEY', fontFamily: MONT, fontSize: 66.706,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 338, y: 982, w: 403, text: 'STOP', fontFamily: MONT, fontSize: 139.675,
    fontWeight: 900, color: SOFT_RED, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 223, y: 1145, w: 634, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 66.706,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.96 },

  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 303, y: 344, w: 473.03, h: 102, background: NAVY, radius: 19.13,
    border: 1.913, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 364.2, y: 360.58, w: 351, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 23.914, fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 396.07, y: 397.55, w: 150.64, h: 34.13, src: '/templates/t1/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 572.17, y: 397.55, w: 110.15, h: 34.42, src: '/templates/t1/spotify.svg', fit: 'contain' },
];

// ── YouTube 1280x720 ──
const ytElements = [
  { id: 'bg', type: 'image', name: 'Background',
    x: 0, y: 0, w: 1280, h: 1280, src: '/templates/t1/bg-overlay.jpg', fit: 'cover', opacity: 0.9 },
  { id: 'tint', type: 'shape', name: 'Colour wash',
    x: 0, y: 0, w: 1280, h: 720, background: TINT },

  { id: 'mic', type: 'image', name: 'Microphone',
    x: -60, y: 250, w: 320, h: 460, src: '/templates/t1/mic.webp',
    rotate: 168.63, crop: MIC_CROP },

  { id: 'bg-pattern', type: 'image', name: 'Background pattern',
    x: 0, y: 0, w: 1280, h: 1879, src: '/templates/t5/bg.jpg', fit: 'cover' },

  { id: 'photo', type: 'image', name: 'Photo',
    x: 604, y: -8, w: 709.5, h: 946, src: '/templates/t1/hilda.webp', fit: 'cover' },

  { id: 'new', type: 'text', name: '"NEW"',
    x: 70, y: 40, w: 440, text: 'NEW', fontFamily: MONT, fontSize: 99.586,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },
  { id: 'episode', type: 'text', name: '"EPISODE"',
    x: 40, y: 146, w: 500, text: 'EPISODE', fontFamily: MONT, fontSize: 99.586,
    fontWeight: 800, color: NAVY, align: 'center', lineHeight: 1.247 },

  { id: 'pill-bg', type: 'shape', name: 'Season bar',
    x: 80, y: 272, w: 420, h: 56, background: GOLD },
  { id: 'pill-text', type: 'text', name: 'Season & episode',
    x: 100, y: 282, w: 380, text: 'SEASON 2 | EPISODE 7', fontFamily: MONT,
    fontSize: 30, fontWeight: 700, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },

  { id: 'card', type: 'shape', name: 'Glass panel',
    x: 40, y: 360, w: 520, h: 318, background: GLASS, radius: 20,
    border: 3, borderColor: '#FFFFFF' },
  { id: 'line1', type: 'text', name: 'Headline line 1',
    x: 60, y: 384, w: 480, text: 'WHEN THEY', fontFamily: MONT, fontSize: 54,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'line2', type: 'text', name: 'Headline line 2 (big)',
    x: 60, y: 428, w: 480, text: 'STOP', fontFamily: MONT, fontSize: 112,
    fontWeight: 900, color: SOFT_RED, align: 'center', lineHeight: 1.247 },
  { id: 'line3', type: 'text', name: 'Headline line 3',
    x: 60, y: 578, w: 480, text: 'TALKING TO YOU.', fontFamily: MONT, fontSize: 54,
    fontWeight: 800, color: '#FFFFFF', align: 'center', lineHeight: 0.96 },

  { id: 'cta-bg', type: 'shape', name: 'Listen bar',
    x: 690, y: 582, w: 560, h: 112, background: NAVY, radius: 24,
    border: 1.913, borderColor: GOLD },
  { id: 'cta-text', type: 'text', name: 'Listen bar text',
    x: 710, y: 598, w: 520, text: 'WATCH OR LISTEN NOW ON', fontFamily: MONT,
    fontSize: 27, fontWeight: 600, color: '#FFFFFF', align: 'center', lineHeight: 1.247 },
  { id: 'logo-yt', type: 'image', name: 'YouTube logo',
    x: 811, y: 642, w: 172, h: 39, src: '/templates/t1/youtube.svg', fit: 'contain' },
  { id: 'logo-sp', type: 'image', name: 'Spotify logo',
    x: 1003, y: 642, w: 126, h: 39, src: '/templates/t1/spotify.svg', fit: 'contain' },
];

export const template5 = {
  id: 'template-5',
  name: 'Template 5 — Glass Panel',
  description: 'Centred headings with a translucent headline panel.',
  layouts: {
    'post-1080x1250': { background: '#FFFFFF', elements },
    'yt-1280x720':    { background: '#FFFFFF', elements: ytElements },
  },
};
