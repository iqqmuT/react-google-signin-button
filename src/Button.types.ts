export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string;
  theme?: 'light' | 'dark' | 'neutral';
  shape?: 'rectangular' | 'square' | 'pill' | 'circle';
  width?: string;
  logoAlign?: 'left' | 'center';
}
