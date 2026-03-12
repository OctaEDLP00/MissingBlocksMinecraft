/**
 * * Core structure for a Blocks file
 * @typedef {Object} BlocksResponse
* @property {string} name The display name of the Minecraft block.
 * @property {string} img_src The local or remote URL for the block's texture.
 * @property {boolean} [is_animated] Whether the texture uses a vertical sprite sheet for animation.
 * @property {boolean} slab Indicates if a slab version of the block exists.
 * @property {boolean} stair Indicates if a stair version of the block exists.
 * @property {boolean} wall Indicates if a wall version of the block exists.
 * @property {boolean} [fence] Indicates if a fence version of the block exists.
 * @property {boolean} [fence_gate] Indicates if a fence gate version of the block exists.
 * @property {boolean} [infested] Whether the block has a Silverfish-infested counterpart.
 * @property {boolean} [mossy] Whether the block has a mossy variant (common for stones/bricks).
 * @property {boolean} chiseled Indicates if a chiseled version of the block exists.
 * @property {Array<string> | string} [other_variation] Additional special variants not covered by standard types.
 * @property {Array<string> | string} [infested_variation] Specific names for the infested block variations.
 *
 * * Core structure for a JSON Schema Draft-07 file.
 * @typedef {Object} JSONSchema
 * @property {string} [$schema] The URI of the schema specification (e.g., "http://json-schema.org/draft-07/schema#").
 * @property {string} [$id] A unique identifier for the schema.
 * @property {string} [title] A short title for the schema.
 * @property {string} [description] A detailed explanation of what this schema validates.
 * @property {string} [$comment] Non-validating notes for maintainers.
 * @property {SchemaType | Array<SchemaType>} [type] The primitive type(s) allowed for the data.
 * @property {*} [default] The default value if the property is missing.
 * @property {boolean} [readOnly] Indicates the value should not be modified.
 * @property {boolean} [writeOnly] Indicates the value is only for submission.
 * * Object Validation
 * @property {Record<string, JSONSchema>} [properties] Definitions for object properties.
 * @property {Array<string>} [required] List of property names that must be present.
 * @property {boolean | JSONSchema} [additionalProperties] Controls if extra properties are allowed.
 * @property {Record<string, JSONSchema>} [patternProperties] Regex-based property validation.
 * @property {number} [minProperties] Minimum number of properties allowed in an Record
 * @property {number} [maxProperties] Maximum number of properties allowed in an Record
 * @property {Record<string, Array<string> | JSONSchema>} [dependencies] Property or schema dependencies.
 * * Array Validation
 * @property {JSONSchema | Array<JSONSchema>} [items] Schema(s) for array elements.
 * @property {JSONSchema} [additionalItems] Schema for elements beyond those in a tuple (items as array).
 * @property {JSONSchema} [contains] At least one element in the array must match this schema.
 * @property {number} [minItems] Minimum array length.
 * @property {number} [maxItems] Maximum array length.
 * @property {boolean} [uniqueItems] If true, all array elements must be unique.
 * * Number Validation
 * @property {number} [multipleOf] Number must be a multiple of this value.
 * @property {number} [minimum] Minimum inclusive value.
 * @property {number} [exclusiveMinimum] Minimum exclusive value.
 * @property {number} [maximum] Maximum inclusive value.
 * @property {number} [exclusiveMaximum] Maximum exclusive value.
 * * String Validation
 * @property {number} [minLength] Minimum string length.
 * @property {number} [maxLength] Maximum string length.
 * @property {string} [pattern] ECMA-262 regular expression the string must match.
 * @property {string} [format] Built-in formats (e.g., "date-time", "email", "ipv4").
 * @property {string} [contentMediaType] MIME type of the string content.
 * @property {string} [contentEncoding] Encoding of the string (e.g., "base64").
 * * Logic & Composition
 * @property {Array<JSONSchema>} [allOf] Must match ALL schemas in the array.
 * @property {Array<JSONSchema>} [anyOf] Must match AT LEAST ONE schema in the array.
 * @property {Array<JSONSchema>} [oneOf] Must match EXACTLY ONE schema in the array.
 * @property {JSONSchema} [not] Must NOT match this schema.
 * @property {Array<*>} [enum] A fixed list of allowed values.
 * @property {*} [const] A single, specific allowed value.
 * * Definitions & References
 * @property {Record<string, JSONSchema>} [definitions] Reusable schema fragments.
 * @property {string} [$ref] Reference to another schema or definition (e.g., "#/definitions/Name").
 * * Conditional Validation
 * @property {JSONSchema} [if] Condition for validation.
 * @property {JSONSchema} [then] Schema applied if 'if' is true.
 * @property {JSONSchema} [else] Schema applied if 'if' is false.
 *
 * * Valid primitive types in Draft-07.
 * @typedef {("array" | "boolean" | "integer" | "number" | "null" | "object" | "string")} SchemaType
 *
 * * Creates a table row element for a Minecraft block.
 * @typedef {Object} blockData The block information.
 * @property {string} name Block name.
 * @property {string} img_src Pre-rendered image HTML or element.
 * @property {boolean} hasSlab Slab availability.
 * @property {boolean} hasStair Stair availability.
 * @property {boolean} hasWall Wall availability.
 * @property {boolean} hasFence Fence availability.
 * @property {boolean} hasFenceGate Fence gate availability.
 * @property {boolean} hasInfested Infested variant availability.
 * @property {boolean} hasMossy Mossy variant availability.
 * @property {boolean} hasChiseled Chiseled variant availability.
 * @property {string} others Other variations text.
 * @property {string} infested Infested variations text.
 * @returns {HTMLTableRowElement}
 */
