export interface CardProps {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total';
}

export type TypeProps = CardProps;

export const icon = {
  up: `arrow-up-circle`,
  down: `arrow-down-circle`,
  total: `dollar-sign`,
};
