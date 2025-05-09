"use client";
import styles from "./Header.module.scss";

export default function Header(): React.JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.biography_wrapper}>
        <span>Apensia Studio</span>
        <button>About</button>
      </div>
    </header>
  );
}
