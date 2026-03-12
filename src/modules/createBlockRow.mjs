/**
 * @param {import('../jsdoc.d.mjs').blockData} blockData
 */
export function createBlockRow(blockData) {
  const tr = document.createElement('tr');

  const checkIcon = /* html */`<span class="icon icon-check">✓</span>`;
  const xIcon = /* html */`<span class="icon icon-x">✕</span>`;

  /**
   * Helper to create simple text - centered cells
   * @param {string | boolean} content
   * @param {boolean} isIcon
   * @returns {HTMLTableCellElement}
   */
  const createCell = (content, isIcon = false) => {
    const td = document.createElement('td');
    td.className = 'text-center';
    if (isIcon) {
      td.innerHTML = content ? checkIcon : xIcon;
    } else {
      td.textContent = /** @type {string | undefined | null} */(content) ?? '';
    }
    return td;
  };

  /**
   * Creates a text-centered cell with ellipsis support for variations.
   * @param {string} content
   */
  const createVariationCell = (content) => {
    const td = document.createElement('td');
    td.className = 'text-center p-3 max-w-[150px] relative group';
    const container = document.createElement('p');
    container.title = content
    container.className = 'truncate cursor-default';
    container.textContent = content;
    td.appendChild(container);
    return td;
  };

  // 1. Primary cell (Name + Image)
  const mainCell = document.createElement('td');
  const imgSlot = document.createElement('img');

  imgSlot.src = blockData.img_src
  imgSlot.width = 16
  imgSlot.height = 16
  imgSlot.alt = blockData.name
  imgSlot.className = 'pixelated size-14 mx-auto'

  mainCell.append(imgSlot);
  tr.appendChild(mainCell);

  // 2. Boolean Icons cells
  tr.append(
    createCell(blockData.hasSlab, true),
    createCell(blockData.hasStair, true),
    createCell(blockData.hasWall, true),
    createCell(blockData.hasInfested, true),
    typeof blockData.hasMossy === 'boolean' ? createCell(blockData.hasMossy, true) : createVariationCell(blockData.hasMossy),
    createCell(blockData.hasChiseled, true),
    typeof blockData.hasFence === 'boolean' ? createCell(blockData.hasFence, true) : createVariationCell(blockData.hasFence),
    typeof blockData.hasFenceGate === 'boolean' ? createCell(blockData.hasFenceGate, true) : createVariationCell(blockData.hasFenceGate),
  );

  // 3. Variation text cells
  tr.append(
    createVariationCell(blockData.others),
    createVariationCell(blockData.infested)
  );

  return tr;
}
