import styles from "../styles/components/Header.module.css";

const MyHeader = () => {
  return (
    <header className={styles.headerContainer}>
      <img id={styles.logo} src="logo.svg" alt="Logo Dev Finance" />
    </header>
  );
};

export { MyHeader };
