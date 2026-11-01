// design/templates/podcastBold.js
// PLACEHOLDER template, built to exercise every element type while the real
// Figma designs are being prepared. Replace the layouts, keep the shape.

const PHOTO = '/images/hilda-hero.jpg';

const ytElements = [
  { id: 'bg',      type: 'image', name: 'Background photo', x: 0, y: 0, w: 1280, h: 720,
    src: PHOTO, fit: 'cover', focusX: 70, focusY: 40 },
  { id: 'scrim',   type: 'shape', name: 'Dark overlay', x: 0, y: 0, w: 760, h: 720,
    background: 'linear-gradient(90deg, rgba(11,27,51,0.92) 0%, rgba(11,27,51,0.80) 60%, rgba(11,27,51,0) 100%)' },
  { id: 'eyebrow', type: 'text',  name: 'Eyebrow', x: 72, y: 128, w: 600,
    text: 'FRAGRANCE PODCAST', fontFamily: "'Inter', sans-serif", fontSize: 26,
    fontWeight: 600, color: '#C9A227', letterSpacing: 6, uppercase: true },
  { id: 'episode', type: 'text',  name: 'Episode number', x: 72, y: 176, w: 600,
    text: 'EPISODE 7', fontFamily: "'Inter', sans-serif", fontSize: 30,
    fontWeight: 700, color: '#FAF6EE', letterSpacing: 3, uppercase: true },
  { id: 'title',   type: 'text',  name: 'Main title', x: 72, y: 238, w: 640,
    text: 'When They\nLeave Home', fontSize: 92, fontWeight: 700, color: '#FFFFFF',
    lineHeight: 1.02, shadow: '0 6px 24px rgba(0,0,0,0.45)' },
  { id: 'rule',    type: 'shape', name: 'Gold line', x: 72, y: 470, w: 96, h: 5,
    background: '#C9A227', radius: 4 },
  { id: 'sub',     type: 'text',  name: 'Subtitle', x: 72, y: 502, w: 560,
    text: 'A parent’s hope for every season', fontFamily: "'Inter', sans-serif",
    fontSize: 28, fontWeight: 400, color: 'rgba(250,246,238,0.88)' },
  { id: 'cta',     type: 'button', name: 'Button', x: 72, y: 578,
    text: 'Listen Now', background: '#C9A227', color: '#0B1B33' },
];

// Each size is laid out on its own. Element ids repeat across sizes so the
// editor can carry text and images over when the size is switched.
const squareElements = [
  { ...ytElements[0], x: 0, y: 0, w: 1080, h: 1080, focusX: 60, focusY: 30 },
  { id: 'scrim', type: 'shape', name: 'Dark overlay', x: 0, y: 420, w: 1080, h: 660,
    background: 'linear-gradient(180deg, rgba(11,27,51,0) 0%, rgba(11,27,51,0.90) 45%, rgba(11,27,51,0.96) 100%)' },
  { ...ytElements[2], x: 80, y: 596, w: 920, fontSize: 24 },
  { ...ytElements[3], x: 80, y: 640, w: 920, fontSize: 28 },
  { ...ytElements[4], x: 80, y: 700, w: 920, fontSize: 86 },
  { ...ytElements[5], x: 80, y: 896, w: 96, h: 5 },
  { ...ytElements[6], x: 80, y: 928, w: 860, fontSize: 26 },
  { ...ytElements[7], x: 80, y: 990 },
];

const storyElements = [
  { ...ytElements[0], x: 0, y: 0, w: 1080, h: 1920, focusX: 55, focusY: 28 },
  { id: 'scrim', type: 'shape', name: 'Dark overlay', x: 0, y: 900, w: 1080, h: 1020,
    background: 'linear-gradient(180deg, rgba(11,27,51,0) 0%, rgba(11,27,51,0.92) 40%, rgba(11,27,51,0.97) 100%)' },
  { ...ytElements[2], x: 90, y: 1180, w: 900, fontSize: 30 },
  { ...ytElements[3], x: 90, y: 1236, w: 900, fontSize: 34 },
  { ...ytElements[4], x: 90, y: 1308, w: 900, fontSize: 104 },
  { ...ytElements[5], x: 90, y: 1572, w: 110, h: 6 },
  { ...ytElements[6], x: 90, y: 1612, w: 860, fontSize: 32 },
  { ...ytElements[7], x: 90, y: 1704, fontSize: 32 },
];

const bannerElements = [
  { ...ytElements[0], x: 0, y: 0, w: 1920, h: 1080, focusX: 72, focusY: 38 },
  { id: 'scrim', type: 'shape', name: 'Dark overlay', x: 0, y: 0, w: 1120, h: 1080,
    background: 'linear-gradient(90deg, rgba(11,27,51,0.93) 0%, rgba(11,27,51,0.82) 60%, rgba(11,27,51,0) 100%)' },
  { ...ytElements[2], x: 110, y: 240, w: 900, fontSize: 30 },
  { ...ytElements[3], x: 110, y: 296, w: 900, fontSize: 34 },
  { ...ytElements[4], x: 110, y: 368, w: 940, fontSize: 124 },
  { ...ytElements[5], x: 110, y: 690, w: 120, h: 6 },
  { ...ytElements[6], x: 110, y: 732, w: 860, fontSize: 34 },
  { ...ytElements[7], x: 110, y: 834, fontSize: 32 },
];

export const podcastBold = {
  id: 'podcast-bold',
  name: 'Podcast — Bold Title',
  description: 'Placeholder. Large title over a photo with a gold accent.',
  layouts: {
    'yt-1280x720':      { background: '#0B1B33', elements: ytElements },
    'square-1080':      { background: '#0B1B33', elements: squareElements },
    'story-1080x1920':  { background: '#0B1B33', elements: storyElements },
    'banner-1920x1080': { background: '#0B1B33', elements: bannerElements },
  },
};
