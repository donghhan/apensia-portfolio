import styles from "./page.module.scss";
import Header from "./_components/Header/Header";
import ContentTable from "./_components/ContentTable/ContentTable";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <ContentTable />
      </main>
    </div>
  );
}
