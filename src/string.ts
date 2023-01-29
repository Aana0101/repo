/**
 * Function that parses a string boolean value and returns the corresponding boolean value
 * @param {string | number} candidate - The string boolean value to be parsed
 * @return {boolean} - The parsed boolean value
 */

export function parseBoolean(candidate: string | number) {
  try {
    // wrap in boolean to ensure that the return value
    // is a boolean even if values like 0 or 1 are passed
    return Boolean(
      JSON.parse(typeof candidate === 'number' ? String(candidate) : candidate)
    );
  } catch (error) {
    return false;
  }
}
