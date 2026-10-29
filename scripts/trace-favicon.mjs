// One-off script: traces the Netrunner runner logo PNG into a vector SVG favicon.
// Usage: node scripts/trace-favicon.mjs <input.png> <output.svg>
import fs from 'node:fs'
import { PNG } from 'pngjs'
import ImageTracer from 'imagetracerjs'

const [, , input, output] = process.argv
const png = PNG.sync.read(fs.readFileSync(input))

const imageData = { width: png.width, height: png.height, data: png.data }

const svg = ImageTracer.imagedataToSVG(imageData, {
  numberofcolors: 8,
  colorquantcycles: 5,
  pathomit: 24,
  ltres: 1,
  qtres: 1,
  strokewidth: 0,
  linefilter: true,
  roundcoords: 1,
  blurradius: 0,
  viewbox: true,
})

fs.writeFileSync(output, svg)
console.log(`SVG written: ${output} (${(fs.statSync(output).size / 1024).toFixed(1)} KB)`)
