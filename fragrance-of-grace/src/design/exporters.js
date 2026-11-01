// design/exporters.js
// Exports the live canvas node to PNG, JPEG or PDF, entirely in the browser.
//
// The output is an ordinary raster image composited from her own photos and
// text. Nothing generative is involved, so the file carries no C2PA provenance
// tag and no generator watermark — there is nothing to strip, because nothing
// stamped it in the first place. Any AI marker in a picture she uploads will
// still be inside that picture; this only avoids adding one.

import { toPng, toJpeg } from 'html-to-image';

// Waits for web fonts and every <img> so nothing exports half-drawn.
async function settle(node) {
  if (document.fonts?.ready) await document.fonts.ready;
  const imgs = Array.from(node.querySelectorAll('img'));
  await Promise.all(
    imgs.map((img) =>
      img.complete && img.naturalWidth
        ? Promise.resolve()
        : new Promise((res) => { img.onload = res; img.onerror = res; })
    )
  );
  // One more frame so layout settles after fonts swap in.
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
}

const baseOpts = (size, scale) => ({
  width: size.w,
  height: size.h,
  pixelRatio: scale,
  cacheBust: true,
  // html-to-image inlines the subtree; skip the scaling wrapper's transform.
  style: { transform: 'none', transformOrigin: 'top left' },
});

export async function renderDataUrl(node, size, { format = 'png', scale = 2, quality = 0.95 } = {}) {
  await settle(node);
  return format === 'jpeg'
    ? toJpeg(node, { ...baseOpts(size, scale), quality, backgroundColor: '#ffffff' })
    : toPng(node, baseOpts(size, scale));
}

function triggerDownload(dataUrl, filename) {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export async function downloadImage(node, size, { format, scale, filename }) {
  const dataUrl = await renderDataUrl(node, size, { format, scale });
  triggerDownload(dataUrl, `${filename}.${format === 'jpeg' ? 'jpg' : 'png'}`);
}

export async function downloadPdf(node, size, { scale = 2, filename }) {
  // Loaded on demand — jsPDF is large and most downloads are images.
  const { jsPDF } = await import('jspdf');
  const dataUrl = await renderDataUrl(node, size, { format: 'png', scale });
  const pdf = new jsPDF({
    orientation: size.w >= size.h ? 'landscape' : 'portrait',
    unit: 'px',
    format: [size.w, size.h],
    compress: true,
  });
  pdf.addImage(dataUrl, 'PNG', 0, 0, size.w, size.h, undefined, 'FAST');
  pdf.save(`${filename}.pdf`);
}
