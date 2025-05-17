"use client";
import styles from "./Contents.module.scss";
import projectData from "@/app/_data/project.json";
import { useState } from "react";
import Image from "next/image";

export default function Contents(): React.JSX.Element {
  const [projectID, setProjectID] = useState<string | null>(null);
  const onHoverThumbnail = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.id || null;
    setProjectID(id);
  };
  const onLeaveReset = () => {
    setProjectID(null);
  };
  // console.log(projectID);

  return (
    <main className={styles.container}>
      <section id={styles.toc}>
        <div className={styles.content_wrapper}>
          {projectData.map((i, index) => (
            <div key={index} className={styles.content}>
              <span className={styles.number}>
                {index + 1 <= 9 ? `0${index + 1}` : index + 1}
              </span>
              <button
                className={styles.exp_wrapper}
                onMouseEnter={onHoverThumbnail}
                onMouseLeave={onLeaveReset}
                id={i.id}
              >
                <span className={styles.title}>{i.title}</span>
                <p className={styles.summary}>{i.summary}</p>
              </button>
            </div>
          ))}
        </div>
      </section>
      <section id={styles.preview}>
        <div className={styles.image_wrapper}>
          <Image
            src={`/images/project_${projectID}/thumbnail.png`}
            alt={`Thumbnail image of project ${projectID}`}
            quality={100}
            sizes="(min-width: 1024px) 50vw, 100vw"
            fill
          />
        </div>
      </section>
    </main>
  );
}
