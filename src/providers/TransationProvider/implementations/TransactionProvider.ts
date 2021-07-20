import { ITransactionProvider } from "../ITransactionProvider";

type TransactionProps = {
  id: number;
  description: string;
  amount: number;
  date: Date;
};

class TransactionProvider implements ITransactionProvider {
  private transactions: TransactionProps[];

  constructor() {
    const storageTransactions = localStorage.getItem("finance.transactions");

    this.transactions =
      (JSON.parse(storageTransactions) as TransactionProps[]) || [];
  }

  income: () => number;
  expenses: () => number;
  total: () => number;

  getTransactions(): TransactionProps[] {
    return this.transactions;
  }
}

export default new TransactionProvider();

export { TransactionProvider };
