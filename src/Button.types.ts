export interface ButtonProps {
  label?: string;
  width?: string;
  theme?: 'light' | 'dark' | 'neutral';
  shape?: 'rectangular' | 'square' | 'pill' | 'circle';
  logoAlign?: 'left' | 'center';
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
