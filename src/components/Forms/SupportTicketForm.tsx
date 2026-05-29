import css from "./Form.module.css";

export default function SupportTicketForm() {
  return (
    <form className={css.form}>
      <h2>Запит у підтримку</h2>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Контакти</legend>

        <label className={css.label} htmlFor="support-name">
          Ім’я
        </label>
        <input id="support-name" className={css.input} />

        <label className={css.label} htmlFor="support-email">
          Email
        </label>
        <input id="support-email" className={css.input} />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Деталі</legend>

        <label className={css.label} htmlFor="product">
          Продукт
        </label>
        <select id="product" className={css.input}>
          <option>Обери продукт</option>
          <option>Веб-додаток</option>
          <option>Мобільний застосунок</option>
          <option>API / інтеграція</option>
        </select>

        <label className={css.label} htmlFor="issue-type">
          Тип питання
        </label>
        <select id="issue-type" className={css.input}>
          <option>Обери тип</option>
          <option>Баг</option>
          <option>Оплата</option>
          <option>Feature request</option>
          <option>Інше</option>
        </select>

        <p className={css.label}>Терміновість</p>

        <label className={css.option}>
          <input />
          Низька
        </label>

        <label className={css.option}>
          <input />
          Середня
        </label>

        <label className={css.option}>
          <input />
          Висока
        </label>
      </fieldset>

      <label className={css.label} htmlFor="support-message">
        Опис проблеми
      </label>
      <textarea id="support-message" rows={4} className={css.textarea} />

      <button type="submit" className={css.button}>
        Надіслати запит
      </button>
    </form>
  );
}
