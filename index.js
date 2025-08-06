/**
 * Get the 'earliest' character from the string.
 * @param {String} str
 * @returns The 'earliest' character from the string.
 * @example getEarliestChar('nepo') // returns 'e'
 */
export const getEarliestChar = (str) => {
    let current = str.charCodeAt(0);

    for(let i = 1; i < str.length; i++) {
        const charcode = str.charCodeAt(i);
        if(charcode < current) {
            current = charcode;
        }
    }

    return String.fromCharCode(current);
}

/**
 * Reverse the input string.
 * @param {String} str
 * @returns {String} The string but reversed.
 * @example reverseString('nepo') // returns 'open'
 */
export const reverseString = (str) => str.split('').reverse().join('');

/**
 * Returns either 'open' or 'rent', depending on the length of the input string.
 * @param {String} str The input string.
 * @returns {String} 'open' if odd, 'rent' if even.
 * @example rentOrOpen('nepo') returns 'rent'
 */
export const rentOrOpen = (str) => (str.length % 2 === 0 ? 'rent' : 'open');

/**
 * Creates a concatenated string with the reverse of the input at the start, the 'earliest' character next and appended with either 'open' or 'rent'.
 * @param {String} str 
 * @returns {String} The concatenated string.
 * @example createString('nepo') // returns 'openerent'
 */
export const createString = (str) => {
  const earliest = getEarliestChar(str);
  const reverse = reverseString(str);
  const suffix = rentOrOpen(str);

  return `${reverse}${earliest}${suffix}`;
};

console.log(createString('nepo'));

