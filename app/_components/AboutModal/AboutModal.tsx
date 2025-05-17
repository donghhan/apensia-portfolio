import styles from "./AboutModal.module.scss";
import Image from "next/image";

type AboutModalProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AboutModal({
  menuOpen,
  setMenuOpen,
}: AboutModalProps): React.JSX.Element {
  const handleModalClose = () => setMenuOpen(false);

  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <button className={styles.close_button} onClick={handleModalClose}>
          close
        </button>
        <div id={styles.bio}>
          <h1 className={styles.title}>About</h1>
          <p className={styles.text}>
            Fullstack developer during daytime, Indie hacker during night time.
            <br />
            Huge interest in building a variety of apps that can benefit all
            human beings and all over the world.
          </p>
        </div>
        <div id={styles.tech_stacks}>
          <h1 className={styles.title}>Tech Stack</h1>
          <div className={styles.wrapper}>
            <div id={styles.communication}>
              <h2 className={styles.subtitle}>Communication</h2>
              <div className={styles.icons}>
                <Image
                  src="tech_icons/notion.svg"
                  alt="notion icon"
                  width={30}
                  height={30}
                />
                <Image
                  src="tech_icons/slack.svg"
                  alt="slack icon"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div id={styles.develop}>
              <h2 className={styles.subtitle}>Develop</h2>
              <div className={styles.icons}>
                <Image
                  src="tech_icons/react.svg"
                  alt="react icon"
                  width={30}
                  height={30}
                />
                <Image
                  src="tech_icons/nextdotjs.svg"
                  alt="nextjs icon"
                  width={30}
                  height={30}
                />
                <Image
                  src="tech_icons/typescript.svg"
                  alt="typescript icon"
                  width={30}
                  height={30}
                />
                <Image
                  src="tech_icons/django.svg"
                  alt="django icon"
                  width={30}
                  height={30}
                />
                <Image
                  src="tech_icons/express.svg"
                  alt="express icon"
                  width={30}
                  height={30}
                />
                <Image
                  src="tech_icons/supabase.svg"
                  alt="supabase icon"
                  width={30}
                  height={30}
                />
                <Image
                  src="tech_icons/postgresql.svg"
                  alt="postgresql icon"
                  width={30}
                  height={30}
                />
                <Image
                  src="tech_icons/mongodb.svg"
                  alt="mongodb icon"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <div id={styles.editor}>
              <h2 className={styles.subtitle}>Editor</h2>
              <div className={styles.icons}>
                <Image
                  src="tech_icons/vegas.svg"
                  alt="vegas icon"
                  width={40}
                  height={40}
                />
                <Image
                  src="tech_icons/gimp.svg"
                  alt="gimp icon"
                  width={30}
                  height={30}
                />
                <Image
                  src="tech_icons/sfm.svg"
                  alt="sourcefilmmaker icon"
                  width={100}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
