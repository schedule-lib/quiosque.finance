import { useContext } from "react";

import { TransactionsContext } from "../context/TransactionsContext";

function useTransactions() {
  const { transactions } = useContext(TransactionsContext);

  return transactions;
}

export { useTransactions };
