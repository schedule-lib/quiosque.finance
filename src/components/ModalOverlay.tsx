import styles from "../styles/components/Modal.module.css";

type ModalProps = {
  isActive: boolean;
};

const ModalOverlay = ({ isActive }: ModalProps) => {
  function handleSubmit() {}

  return (
    <div className={`${styles.modalOverlay} ${isActive && styles.active}`}>
      <div className={styles.modal}>
        <div id={styles.form}>
          <h2>Nova Transação</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label className="sr-only" htmlFor="description">
                Descrição
              </label>
              <input
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
              <input type="date" id={styles.date} name="date" />
            </div>

            <div className={`${styles.inputGroup} ${styles.actions}`}>
              <button
                type="button"
                className={`${styles.button} ${styles.cancel}`}
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
