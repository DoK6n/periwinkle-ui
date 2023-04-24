export const periwinkleLight = {
  50: '#f4f4fd',
  100: '#d7d9f8',
  200: '#c0c3ec',
  300: '#a9ade3',
  400: '#a2a6ed',
  500: '#8d92e9',
  600: '#767fd2',
  700: '#6a71b9',
  800: '#5f66aa',
  900: '#444c8e',
}

export const periwinkleDark = {
  50: '#e0def9',
  100: '#b6b6e0',
  200: '#9797cf',
  300: '#8181c5',
  400: '#7070af',
  500: '#6867af',
  600: '#5c5d9d',
  700: '#505186',
  800: '#424771',
  900: '#353a5c',
}

export const black = '#000000'
export const white = '#ffffff'
export const darkText = {
  primary: 'rgba(0, 0, 0, 0.87)',
  secondary: 'rgba(0, 0, 0, 0.54)',
  disabled: 'rgba(0, 0, 0, 0.38)',
  dividers: 'rgba(0, 0, 0, 0.12)',
}
export const lightText = {
  primary: 'rgba(255, 255, 255, 1)',
  secondary: 'rgba(255, 255, 255, 0.7)',
  disabled: 'rgba(255, 255, 255, 0.5)',
  dividers: 'rgba(255, 255, 255, 0.12)',
}

export const palette = (mode: 'light' | 'dark') => ({
  colors: mode === 'light' ? periwinkleLight : periwinkleDark,
  primary: {
    color: mode === 'light' ? periwinkleLight['500'] : periwinkleDark['500'],
    hover: mode === 'light' ? periwinkleLight['600'] : periwinkleDark['600'],
    active: mode === 'light' ? periwinkleLight['400'] : periwinkleDark['400'],
  },
  surface: {
    mode: {
      light: '#e0e0e0',
      dark: '#616161',
    },
    hover: '#f5f5f5',
    active: '#bdbdbd',
  },
  background: {
    light: '#ffffff',
    dark: '#212121',
  },
})
