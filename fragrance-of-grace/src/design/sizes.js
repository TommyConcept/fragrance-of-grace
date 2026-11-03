// design/sizes.js — the canvas sizes a design can be exported at.
//
// `post-1080x1250` is the size the templates are drawn at in Figma; every
// other size is either laid out by hand in the template or derived from that
// one automatically (see fitLayout in schema.js).

export const SIZES = {
  'post-1080x1250': { id: 'post-1080x1250', label: 'Podcast post',      w: 1080, h: 1250, note: 'Original' },
  'ig-1080x1350':   { id: 'ig-1080x1350',   label: 'Instagram post',    w: 1080, h: 1350, note: '4:5 portrait' },
  'square-1080':    { id: 'square-1080',    label: 'Square post',       w: 1080, h: 1080, note: '1:1' },
  'yt-1280x720':    { id: 'yt-1280x720',    label: 'YouTube thumbnail', w: 1280, h: 720,  note: '16:9' },
  'fb-1200x630':    { id: 'fb-1200x630',    label: 'Facebook post',     w: 1200, h: 630,  note: 'Wide' },
};

export const BASE_SIZE = 'post-1080x1250';
export const SIZE_LIST = Object.values(SIZES);
