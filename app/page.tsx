"use client";
import styles from "./page.module.scss";
import Header from "./_components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id={styles.hero}></section>
      </main>
    </>
  );
}
