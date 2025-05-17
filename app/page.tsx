import styles from "./page.module.scss";
import Header from "./_components/Header/Header";
import ContentTable from "./_components/Contents/Contents";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <ContentTable />
    </div>
  );
}
