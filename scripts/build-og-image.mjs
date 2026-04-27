import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const svgPath = resolve(root, 'public/og-image.svg');
const pngPath = resolve(root, 'public/og-image.png');
const fontsDir = resolve(root, 'public/fonts');

const fonts = [
  { family: 'EB Garamond', weight: 400, style: 'normal', file: 'EBGaramond-Regular.ttf' },
  { family: 'EB Garamond', weight: 400, style: 'italic', file: 'EBGaramond-Italic.ttf' },
  { family: 'Work Sans',   weight: 400, style: 'normal', file: 'WorkSans-Regular.ttf' },
  { family: 'Work Sans',   weight: 500, style: 'normal', file: 'WorkSans-Medium.ttf' },
];

const fontFaces = await Promise.all(
  fonts.map(async ({ family, weight, style, file }) => {
    const buf = await readFile(resolve(fontsDir, file));
    const b64 = buf.toString('base64');
    return `@font-face{font-family:"${family}";font-weight:${weight};font-style:${style};src:url(data:font/ttf;base64,${b64}) format("truetype");}`;
  }),
);

const svg = await readFile(svgPath, 'utf8');
const styleBlock = `<style>${fontFaces.join('')}</style>`;
const withFonts = svg.replace('<defs>', `<defs>${styleBlock}`);

await sharp(Buffer.from(withFonts), { density: 144 })
  .resize(1200, 630)
  .png()
  .toFile(pngPath);

console.log(`Wrote ${pngPath}`);
