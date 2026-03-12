import { createBlockRow } from './modules/createBlockRow.mjs'
import { getBlocks } from './modules/getblocks.mjs'
import { getSchema } from './modules/getSchema.mjs'
import { validateBlocksPresence } from './modules/validationsBlockPresence.mjs'

const blocks = await getBlocks() ?? []
const schema = await getSchema() ?? {}

if (schema) {
  validateBlocksPresence(blocks, schema)
}

/** @type {HTMLTableSectionElement | null} */
const tableBody = document.querySelector('tbody')

if (tableBody) {
  for await (const block of blocks) {
    const {
      name, img_src, slab, stair,
      wall, fence, fence_gate, infested,
      chiseled, mossy, other_variation,
      infested_variation
    } = block
    const rowElement = createBlockRow({
      name,
      img_src,
      hasSlab: slab,
      hasStair: stair,
      hasWall: wall,
      // @ts-ignore
      hasFence: fence,
      // @ts-ignore
      hasFenceGate: fence_gate,
      // @ts-ignore
      hasInfested: infested,
      // @ts-ignore
      hasMossy: mossy,
      hasChiseled: chiseled,
      // @ts-ignore
      others: Array.isArray(other_variation) ? other_variation.join(', ') : other_variation,
      // @ts-ignore
      infested: Array.isArray(infested_variation) ? infested_variation.join(', ') : infested_variation,
    });
    tableBody.appendChild(rowElement);
  }
}
