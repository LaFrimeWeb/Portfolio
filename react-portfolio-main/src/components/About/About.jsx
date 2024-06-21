import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>À propos</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Expertise Technique</h3>
              <p>
              Je suis un développeur web expérimenté, spécialisé dans HTML, CSS, JavaScript, React, et Node.js, avec un fort accent sur l'utilisateur et la qualité.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Passion pour l'Innovation</h3>
              <p>
              Passionné par l'innovation, j'explore constamment de nouvelles technologies pour améliorer les performances et l'accessibilité des sites web.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Collaboration et Partage</h3>
              <p>
              Je valorise la collaboration et le partage des connaissances, travaillant en équipe et contribuant à des projets open source pour créer des solutions web utiles et innovantes.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
