import Head from "next/head";
import { useContext } from "react";

import { MyHeader } from "../components/Header";
import ModalOverlay from "../components/ModalOverlay";
import { ModalContext } from "../context/ModalContext";
import styles from "../styles/Home.module.css";

function Home() {
  const { modalIsActive, changeActiveState } = useContext(ModalContext);

  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Quiosque | Finance</title>
        <meta name="description" content="Control the quiosque finance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MyHeader />

      <main className={styles.container}>
        <section id={styles.balance}>
          <h2 className="sr-only">Balanço</h2>

          <div className={styles.card}>
            <h3>
              <span>Entradas</span>
              <img src="income.svg" alt="entradas" />
            </h3>
            <p id={styles.incomeDisplay}>R$ 0,00</p>
          </div>

          <div className={styles.card}>
            <h3>
              <span>Saídas</span>
              <img src="expense.svg" alt="saídas" />
            </h3>
            <p id={styles.expenseDisplay}>R$ 0,00</p>
          </div>

          <div className={`${styles.card} ${styles.total}`}>
            <h3>
              <span>Total</span>
              <img src="total.svg" alt="total" />
            </h3>
            <p id={styles.totalDisplay}>R$ 0,00</p>
          </div>
        </section>

        <section id={styles.transaction}>
          <h2 className="sr-only">Transações</h2>

          <button
            type="button"
            onClick={changeActiveState}
            className={`${styles.button} ${styles.new}`}
          >
            + Nova Transação
          </button>

          <table id={styles.dataTable}>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data</th>
                <th />
              </tr>
            </thead>
            <tbody />
          </table>
        </section>
      </main>

      {modalIsActive && <ModalOverlay />}

      <footer className={styles.footer}>
        <a
          href="https://github.com/eliasallex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}>eliasallex</span>
        </a>
      </footer>
    </div>
  );
}

export default Home;
