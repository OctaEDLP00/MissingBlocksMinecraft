/**
 * Fetches the JSON schema for validation purposes.
 * @returns {Promise<import('../jsdoc.d.mjs').JSONSchema | undefined>}
 */
export async function getSchema() {
  try {
    const response = await fetch('/MissingBlocksMinecraft/public/assets/blocks.schema.json');
    const schema = await response.json();
    return schema
  } catch (error) {
    console.error('Failed to load schema:', error);
  }
}
