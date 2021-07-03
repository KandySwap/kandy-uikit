import { Colors } from "./types";

export const baseColors = {
  failure: '#ffbf00',
  primary: '#CE0000',
  primaryBright: '#FF1100',
  primaryDark: '#AD0000',
  secondary: '#FF7700',
  success: '#45e73f',
  warning: '#ffd837',
};

export const brandColors = {
  binance: "#35f00b",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: '#EAEAEA',
  backgroundDisabled: '#a7a7a7',
  contrast: '#2b2b2b',
  invertedContrast: '#FFFFFF',
  input: '#dedede',
  inputSecondary: '#c7c7c7',
  tertiary: '#bebebe',
  text: '#2d2d2d',
  textDisabled: '#4d4d4d',
  textSubtle: '#d20404',
  borderColor: '#dedede',
  card: '#f0f0f0',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #eaa728 0%, #ff3232 100%)',
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: '#fd1414',
  background: '#101010',
  backgroundDisabled: '#3d3d3d',
  contrast: '#FFFFFF',
  invertedContrast: '#2b2b2b',
  input: '#2d2d2d',
  inputSecondary: '#4d4d4d',
  primaryDark: '#0098A1',
  tertiary: '#161616',
  text: '#fce2e2',
  textDisabled: '#7d7d7d',
  textSubtle: '#d20404',
  borderColor: '#2d2d2d',
  card: '#1d1d1d',
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #eaa728 0%, #ff3232 100%)',
  },
};
