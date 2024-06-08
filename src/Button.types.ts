export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string;
  theme?: 'light' | 'dark' | 'neutral';
  shape?: 'rectangular' | 'square' | 'pill' | 'circle';
  size?: 'lg' | 'md' | 'sm';
  logoAlign?: 'left' | 'center';
}
