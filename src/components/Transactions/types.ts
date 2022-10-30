export interface CategoryProps {
  name: string;
  icon: string;
  color: string;
}

export interface TransactionProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

export interface DataTransaction {
  data: TransactionProps;
}

export type TypeProps = TransactionProps;
