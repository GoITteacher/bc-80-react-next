import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <article className={styles.card}>
      <h3 className={styles.cardTitle}>Проєкти</h3>
      <p className={styles.cardText}>
        Невеликі нотатки про те, як зберігати спокій та отримувати максимум від
        кожної сторінки.
      </p>
    </article>
  );
};

export default Projects;
