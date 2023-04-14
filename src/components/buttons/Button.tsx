import { css } from '@emotion/react';
import colors from '~/lib/colors';

type ButtonColorType = keyof typeof colors.periwinkle;

interface ButtonProps {
  /**
   * button text
   */
  label?: string;
  /**
   * background color
   */
  bg?: ButtonColorType;
  /**
   * click event handler
   */
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ label = 'Primary', bg = '500', onClick }: ButtonProps) {
  return (
    <button css={buttonStyle(bg)} onClick={onClick}>
      {label}
    </button>
  );
}

const buttonStyle = (bg: ButtonColorType) => css`
  border: none;
  outline: none;
  box-sizing: border-box;
  width: 10em;
  height: 3em;
  background: ${colors.periwinkle[bg]};
  border-radius: 6px;
  cursor: pointer;
  color: ${colors.lightText.primary};
  transition: all 0.2s ease-out;
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    filter: grayscale(15%);
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:focus-visible {
    box-shadow: 0 0 0.5rem #808ad8e4;
  }

  &:hover {
    background: ${colors.hover[bg]};
  }

  &:active {
    background: ${colors.active[bg]};
  }
`;

export default Button;
