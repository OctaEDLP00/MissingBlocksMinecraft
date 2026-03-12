
/**
 * Validates that all blocks defined in the schema enum are present in the loaded blocks data.
 * Useful for debugging inconsistencies during development.
 * @param {Array<import('../jsdoc.d.mjs').BlocksResponse>} blocks - The data loaded from blocks.json
 * @param {import('../jsdoc.d.mjs').JSONSchema} schema - The loaded schema.json
 * @returns {void}
 */
export function validateBlocksPresence(blocks, schema) {
  const requiredNames = schema.definitions?.Name.enum;
  const currentNames = blocks.map(block => block.name);
  const missingBlocks = requiredNames?.filter(name => !currentNames.includes(name));
  if (missingBlocks && missingBlocks?.length > 0) {
    console.group('%c❌ Validation Error: Missing Blocks', 'color: #FF5555; font-weight: bold;');
    console.warn('The following blocks are defined in the schema but missing in blocks.json:');
    console.table(missingBlocks);
    console.groupEnd();
  } else {
    console.log('%c✅ Validation Success: All blocks are present.', 'color: #55FF55; font-weight: bold;');
  }
}
