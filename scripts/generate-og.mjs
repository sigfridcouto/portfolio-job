// Generates public/og.jpg (1200×630) for social previews.
// Run after changing the portrait or the headline: `npm run og`
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = new URL('..', import.meta.url);
const W = 1200;
const H = 630;
const PHOTO = 360;

const photo = await sharp(fileURLToPath(new URL('src/assets/profile.webp', root)))
  .resize(PHOTO, PHOTO)
  .composite([
    {
      input: Buffer.from(`<svg width="${PHOTO}" height="${PHOTO}"><circle cx="${PHOTO / 2}" cy="${PHOTO / 2}" r="${PHOTO / 2}"/></svg>`),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();

const font = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
const background = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g1" cx="85%" cy="0%" r="60%">
      <stop offset="0" stop-color="#22d3ee" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#22d3ee" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="0%" cy="100%" r="55%">
      <stop offset="0" stop-color="#818cf8" stop-opacity="0.30"/>
      <stop offset="1" stop-color="#818cf8" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="txt" x1="0" x2="1">
      <stop offset="0" stop-color="#22d3ee"/>
      <stop offset="1" stop-color="#818cf8"/>
    </linearGradient>
    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#22d3ee"/>
      <stop offset="1" stop-color="#818cf8"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#070b16"/>
  <rect width="${W}" height="${H}" fill="url(#g1)"/>
  <rect width="${W}" height="${H}" fill="url(#g2)"/>
  <circle cx="${W - 80 - PHOTO / 2}" cy="${H / 2}" r="${PHOTO / 2 + 8}" fill="url(#ring)"/>
  <text x="80" y="200" font-family="${font}" font-size="26" font-weight="600" fill="#a3b1c6" letter-spacing="3">SENIOR FULL-STACK ENGINEER</text>
  <text x="80" y="290" font-family="${font}" font-size="72" font-weight="700" fill="#e8eef7">Sigfrid Couto</text>
  <text x="80" y="370" font-family="${font}" font-size="72" font-weight="700" fill="url(#txt)">Fernández</text>
  <text x="80" y="450" font-family="${font}" font-size="30" font-weight="500" fill="#a3b1c6">C# / .NET, Angular, enterprise systems</text>
  <text x="80" y="540" font-family="${font}" font-size="24" fill="#6b7a90">sigfridcouto.com</text>
</svg>`;

await sharp(Buffer.from(background))
  .composite([{ input: photo, left: W - 80 - PHOTO, top: (H - PHOTO) / 2 }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(fileURLToPath(new URL('public/og.jpg', root)));

console.log('public/og.jpg written');
