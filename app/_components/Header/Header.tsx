"use client";
import styles from "./Header.module.scss";
import { useState } from "react";
import AboutModal from "../AboutModal/AboutModal";

export default function Header(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleModalOpen = () => setMenuOpen(true);

  return (
    <header className={styles.header}>
      <div className={styles.biography_wrapper}>
        <span>Apensia Studio</span>
        <button onClick={handleModalOpen}>About Me</button>
        <div className={styles.contact_wrapper}>
          <span>apensia914@gmail.com</span>
        </div>
      </div>

      {menuOpen ? (
        <AboutModal menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      ) : null}
    </header>
  );
}
