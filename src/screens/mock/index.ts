export const DATA_HEADER = {
  userName: `Priscila`,
  photo: `https://avatars.githubusercontent.com/u/42249540?v=4`,
};

export const DATA_CARD = [
  {
    type: `up`,
    title: `Entradas`,
    amount: `R$ 17.400,00`,
    lastTransaction: `Última entrada dia 13 de abril`,
  },
  {
    type: `down`,
    title: `Saídas`,
    amount: `R$ 1.259,00`,
    lastTransaction: `Última saída dia 03 de abril`,
  },
  {
    type: `total`,
    title: `Total`,
    amount: `R$ 16.141,00`,
    lastTransaction: `01 à 16 de abril`,
  },
];

export const DATA_TRANSACTION = [
  {
    type: `positive`,
    title: `Desenvolvimento de site`,
    amount: `R$ 12.000,00`,
    category: {
      name: `Vendas`,
      icon: `dollar-sign`,
    },
    date: `20/10/2022`,
  },
  {
    type: `negative`,
    title: `Saídas`,
    amount: `R$ 59.90`,
    category: {
      name: `Alimentação`,
      icon: `coffee`,
    },
    date: `13/10/2022`,
  },
  {
    type: `negative`,
    title: `Aluguel Apartamento`,
    amount: `R$ 1.200,00`,
    category: {
      name: `Casa`,
      icon: `shopping-bag`,
    },
    date: `04/10/2022`,
  },
  {
    type: `positive`,
    title: `Computador`,
    amount: `R$ 5.400,00`,
    category: {
      name: `Vendas`,
      icon: `dollar-sign`,
    },
    date: `04/10/2022`,
  },
];
