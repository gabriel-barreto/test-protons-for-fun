const _breakpoints = {
  sm: { min: '0px', max: '599px' },
  md: { min: '600px', max: '899px' },
  lg: { min: '900px', max: '1799px' },
  xg: { min: '1800px', max: '8000px' },
};
const _validModifiers = ['min', 'max'];

/**
 * Returns the size in pixels of fancy label to an screen size
 * @param {string} size sm, md, lg or xg
 * @param {string} [modifier='min'] min or max
 * @returns {string} The screen size in pixels
 */
export default function (size, modifier = 'min') {
  if (!Object.keys(_breakpoints).includes(size)) return '';
  if (!_validModifiers.includes(modifier)) return '';

  return _breakpoints[size][modifier];
}
