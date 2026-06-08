import css from "./HowNext.module.css";

const HowNext = () => {
  return (
    <section className={css.howNext}>
      <h2>Як влаштований Next.js</h2>
      <ol>
        <li>Проєкт будується на React, але має власну структуру.</li>
        <li>Маршрути формуються з файлової системи.</li>
        <li>Рендеринг обирається під задачу: SSR, SSG або CSR.</li>
      </ol>
    </section>
  );
};

export default HowNext;
