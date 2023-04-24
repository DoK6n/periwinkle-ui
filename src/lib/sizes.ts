export const sizes = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
}

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const fontSizes: { [key in SizeType]: string } = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
}

export const sizeSets = {
  xs: {
    fontSize: fontSizes['xs'],
    height: sizes[6],
    minWidth: sizes[6],
  },
  sm: {
    fontSize: fontSizes['sm'],
    height: sizes[8],
    minWidth: sizes[8],
  },
  md: {
    fontSize: fontSizes['md'],
    height: sizes[10],
    minWidth: sizes[10],
  },
  lg: {
    fontSize: fontSizes['lg'],
    height: sizes[12],
    minWidth: sizes[12],
  },
  xl: {
    fontSize: fontSizes['xl'],
    height: sizes[14],
    minWidth: sizes[14],
  }
}
