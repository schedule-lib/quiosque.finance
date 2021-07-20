type Transaction = {
  id: number;
  description: string;
  amount: number;
  date: Date;
};

interface ITransactionProvider {
  income: () => number;
  expenses: () => number;
  total: () => number;
  getTransactions(): Transaction[];
}

export type { ITransactionProvider };
