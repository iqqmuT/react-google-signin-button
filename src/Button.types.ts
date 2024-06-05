export interface ButtonProps {
  label?: string;
  theme?: 'light' | 'dark' | 'neutral';
  shape?: 'rectangular' | 'square' | 'pill' | 'circle';
  width?: string;
  logoAlign?: 'left' | 'center';
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
