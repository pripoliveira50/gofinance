export interface CardProps {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'positive' | 'negative' | 'total';
}

export type TypeProps = {
  type: 'positive' | 'negative' | 'total';
};

export const icon = {
  positive: `arrow-up-circle`,
  negative: `arrow-down-circle`,
  total: `dollar-sign`,
};
