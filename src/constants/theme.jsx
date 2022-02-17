import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const COLORS = {
  primary: '#242334',
  accent: '#FF6A65',
  lightGrey: '#F1F1F3',
  darkGrey: '#838383',
  white: '#FFFFFF',
};

export const SIZES = {
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,

  width,
  height,
};
