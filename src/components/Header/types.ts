export interface HeaderProps {
  type?: 'dashboard' | 'default';
  userName?: string;
  photo?: string;
  title?: string;
}

export type TypeProps = {
  type: 'dashboard' | 'default';
};
