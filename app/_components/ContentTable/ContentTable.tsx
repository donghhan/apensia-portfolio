"use client";
import styles from "./ContentTable.module.scss";
import projectData from "@/app/_data/project.json";
import { useState } from "react";

export default function ContentTable(): React.JSX.Element {
  return (
    <main className={styles.container}>
      <section id={styles.toc}>
        <div className={styles.content_wrapper}>
          {projectData.map((i, index) => (
            <button key={index} className={styles.content}>
              <span className={styles.number}>
                {index < 9 ? `0${index + 1}` : index}
              </span>
              <div className={styles.exp_wrapper}>
                <span className={styles.title}>{i.title}</span>
                <p className={styles.summary}>{i.summary}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
      <section id={styles.preview}></section>
    </main>
  );
}
