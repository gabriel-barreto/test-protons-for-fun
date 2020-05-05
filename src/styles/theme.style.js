import chroma from 'chroma-js';

const colors = {
  primaryLight: chroma('#2796FB'),
  primary: chroma('#007DFA'),
  primaryDark: chroma('#0065DC'),

  secondaryLight: chroma('#FDDC88'),
  secondary: chroma('#FCD581'),
  secondaryDark: chroma('#FFC813'),

  dark: chroma('#212121'),
  darkest: chroma('#000000'),

  light: chroma('#EDEDED'),
  lightest: chroma('#FFFFFF'),
};

export default {
  colors,
  shadows: {
    sm: `0 1px 2px ${colors.darkest.alpha(0.24)}`,
    md: `0 2px 4px ${colors.darkest.alpha(0.24)}`,
  },
  sizes: {
    h1: '3.2rem',
    h2: '2.4rem',
    h3: '2rem',
    p: '1.6rem',
  },
  weights: {
    normal: '400',
    strong: '700',
  },
};
