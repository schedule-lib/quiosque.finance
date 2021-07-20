import { createContext, ReactNode, useEffect } from "react";

import { TransactionProvider } from "../providers/TransationProvider/implementations/TransactionProvider";

type TransactionProps = {
  id: number;
  description: string;
  amount: number;
  date: Date;
};
type TransactionsContextType = {
  transactions: TransactionProps[];
};

type TransactionsProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  let transactions;

  useEffect(() => {
    const transactionsContainer = new TransactionProvider();
    transactions = transactionsContainer.getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
