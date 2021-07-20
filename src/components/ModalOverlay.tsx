import { useContext } from "react";
import { useForm } from "react-hook-form";

import { ModalContext } from "../context/ModalContext";
import styles from "../styles/components/Modal.module.css";

type TransactionProps = {
  description: string;
  amount: number;
  date: Date;
};

const ModalOverlay = () => {
  const { modalIsActive, changeActiveState } = useContext(ModalContext);
  const { register, handleSubmit } = useForm();

  function pushNewTransaction(transaction: TransactionProps) {
    localStorage.setItem(
      "finance.transactions",
      JSON.stringify([transaction], null, 2)
    );
    console.log(transaction.amount);
  }

  return (
    <div className={`${styles.modalOverlay} ${modalIsActive && styles.active}`}>
      <div className={styles.modal}>
        <div id={styles.form}>
          <h2>Nova Transação</h2>
          <form onSubmit={handleSubmit(pushNewTransaction)}>
            <div className={styles.inputGroup}>
              <label className="sr-only" htmlFor="description">
                Descrição
              </label>
              <input
                {...register("description")}
                type="text"
                id={styles.description}
                name="description"
                placeholder="Descrição"
              />
            </div>

            <div className={styles.inputGroup}>
              <label className="sr-only" htmlFor="amount">
                Valor
              </label>
              <input
                {...register("amount")}
                type="number"
                step="0.01"
                id={styles.amount}
                name="amount"
                placeholder="0,00"
              />
              <small className={styles.help}>
                Use o sinal - (negativo) para despesas e , (vírgula) para casas
                decimais
              </small>
            </div>

            <div className={styles.inputGroup}>
              <label className="sr-only" htmlFor="date">
                Data
              </label>
              <input
                {...register("date")}
                type="date"
                id={styles.date}
                name="date"
              />
            </div>

            <div className={`${styles.inputGroup} ${styles.actions}`}>
              <button
                type="button"
                className={`${styles.button} ${styles.cancel}`}
                onClick={changeActiveState}
              >
                Cancelar
              </button>

              <button type="submit">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
