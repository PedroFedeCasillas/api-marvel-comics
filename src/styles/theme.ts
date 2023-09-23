import { isMobileDevice } from '../utils/layout';

const isMobile = isMobileDevice();

export const Theme = {
  isMobile,
  font: {
    roboto: 'Roboto, sans-serif',
    robotoCondensed: 'Roboto Condensed, sans-serif',
    regular: 400,
    bold: 700,
  },
  colors: {
    white: '#FFFFFF',
    lightRed: '#EA474D',
    red: '#EC1D24',
    yellow: '#FFCA19',
    black: '#202020',
    transparentWhite: 'rgb(255, 255, 255, 0.75)',
    grey: '#d6d7da',
  },
};

export default Theme;
