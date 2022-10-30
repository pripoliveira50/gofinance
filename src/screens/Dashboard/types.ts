import { SectionListRenderItem } from 'react-native';

import { CardProps } from '@components/Card/types';
import { TransactionProps } from '@components/Transactions/types';

export type CardListRenderType = SectionListRenderItem<CardProps>;

export type TransactionListRenderType = SectionListRenderItem<TransactionProps>;
