import { css } from '@emotion/react'
import { palette, lightText, darkText } from '../../lib/colors'
import { PropsWithChildren } from 'react'
import { SizeType, sizeSets } from '../../lib/sizes'

type ThemeMode = 'light' | 'dark'
type VariantType = 'solid' | 'outline' | 'ghost' | 'link'

interface ButtonProps {
  /**
   * Use the variant prop to change the visual style of the Button. You can set the value to solid, ghost, outline, or link.
   * @default 'solid'
   */
  variant?: VariantType
  /**
   * theme mode
   * @default 'light'
   */
  themeMode?: ThemeMode
  /**
   * button size
   * @default 'md'
   */
  size?: SizeType
  /**
   * click event handler
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export function Button({
  variant = 'solid',
  themeMode = 'light',
  size = 'md',
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button css={buttonStyle(themeMode, variant, size)} onClick={onClick}>
      {children}
    </button>
  )
}

const buttonStyle = (themeMode: ThemeMode, variant: VariantType, size: SizeType) =>
  css`
    outline: none;
    border: none;
    box-sizing: border-box;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease-out;
    -webkit-tap-highlight-color: transparent;

    font-size: ${sizeSets[size].fontSize};
    height: ${sizeSets[size].height};
    min-width: ${sizeSets[size].minWidth};

    padding-left: 1em;
    padding-right: 1em;

    ${variant === 'solid' &&
    css`
      background: ${palette(themeMode).primary.color};
      color: ${lightText.primary};
      &:hover {
        background: ${palette(themeMode).primary.hover};
      }

      &:active {
        background: ${palette(themeMode).primary.active};
      }
    `}
    ${variant === 'outline' &&
    css`
      border: 1px solid ${palette(themeMode).primary.color};
      background: transparent;
      color: ${palette(themeMode).primary.color};
      &:hover {
        background: ${palette(themeMode).colors[50]};
      }

      &:active {
        background: ${palette(themeMode).colors[100]};
      }
    `}
    ${variant === 'ghost' &&
    css`
      background: transparent;
      color: ${palette(themeMode).primary.color};
      &:hover {
        background: ${palette(themeMode).colors[50]};
      }

      &:active {
        background: ${palette(themeMode).colors[100]};
      }
    `}
    ${variant === 'link' &&
    css`
      background: transparent;
      color: ${palette(themeMode).primary.color};
      &:hover {
        text-decoration: underline;
        text-decoration-thickness: 2.5px;
      }

      &:active {
        color: ${palette(themeMode).colors['700']};
        text-decoration: underline;
        text-decoration-thickness: 2.5px;
      }
    `}

    &:disabled {
      filter: grayscale(15%);
      cursor: not-allowed;
      opacity: 0.6;
    }

    &:focus-visible {
      box-shadow: 0 0 0.5rem ${palette(themeMode).primary.color}e4;
    }
  `
