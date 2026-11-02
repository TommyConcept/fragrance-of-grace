// design/sizes.js — the canvas sizes a template can be laid out for.

export const SIZES = {
  'post-1080x1250':  { id: 'post-1080x1250',  label: 'Podcast post', w: 1080, h: 1250, note: 'Figma original' },
  'yt-1280x720':     { id: 'yt-1280x720',     label: 'YouTube thumbnail', w: 1280, h: 720,  note: '16:9' },
  'square-1080':     { id: 'square-1080',     label: 'Instagram / Facebook post', w: 1080, h: 1080, note: '1:1' },
  'story-1080x1920': { id: 'story-1080x1920', label: 'Story / Reel', w: 1080, h: 1920, note: '9:16' },
  'banner-1920x1080':{ id: 'banner-1920x1080',label: 'Banner', w: 1920, h: 1080, note: 'Wide' },
};

export const SIZE_LIST = Object.values(SIZES);
