"use client";
import styles from "./ContentTable.module.scss";
import { useState } from "react";

export default function ContentTable(): React.JSX.Element {
  const contentData = [
    { title: "Title 1", summary: "This is summary for title 1 project." },
  ];

  return (
    <section id={styles.toc}>
      <div className={styles.content_wrapper}>
        {contentData.map((i, index) => (
          <div key={index} className={styles.content}>
            <span className={styles.number}>
              {index < 9 ? `0${index + 1}` : index}
            </span>
            <div className={styles.exp_wrapper}>
              <span className={styles.title}>{i.title}</span>
              <p>{i.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
