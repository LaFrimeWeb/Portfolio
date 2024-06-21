import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Salut , Moi c'est Mehdi</h1>
        <p className={styles.description}>
          Je suis un étudiant en génie informatique à L'ENSA, je vise à devenir un développeur Web aguerri. N'hésiter pas à m'apporter votre soutien!
        </p>
        <a href="mailto:treshlol202@gmail.com" className={styles.contactBtn}> 
  Contactez moi
</a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
