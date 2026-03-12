
/**
 * Fetches the list of Minecraft blocks and their variations from the local JSON asset.
 * @returns {Promise<Array<import('../jsdoc.d.mjs').BlocksResponse> | undefined>} A promise that resolves to the array of blocks or undefined on failure.
 * @throws {string | unknown} Throws the error message if the fetch or parsing fails.
 */
export async function getBlocks() {
  try {
    const response = await fetch('/MissingBlocksMinecraft/public/assets/blocks.json');
    /** @type {Array<import('../jsdoc.d.mjs').BlocksResponse>} */
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      // console.error(error.message)
      throw error.message;
    }
  }
}
