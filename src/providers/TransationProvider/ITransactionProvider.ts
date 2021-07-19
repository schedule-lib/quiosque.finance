interface ITransactionProvider {
  income: () => number;
  expenses: () => number;
  total: () => number;
}

export type { ITransactionProvider };
