import css from "./Form.module.css";

export default function ProductListingForm() {
  return (
    <form className={css.form}>
      <h2>Оголошення про товар</h2>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Основне</legend>

        <label className={css.label} htmlFor="product-title">
          Назва
        </label>
        <input id="product-title" className={css.input} />

        <label className={css.label} htmlFor="product-brand">
          Марка
        </label>
        <input id="product-brand" className={css.input} />

        <label className={css.label} htmlFor="product-model">
          Модель
        </label>
        <input id="product-model" className={css.input} />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Деталі</legend>

        <label className={css.label} htmlFor="product-price">
          Ціна (USD)
        </label>
        <input id="product-price" className={css.input} />

        <label className={css.label} htmlFor="product-condition">
          Стан
        </label>
        <select id="product-condition" className={css.input}>
          <option>Обери стан</option>
          <option>Новий</option>
          <option>Б/в — стан відмінний</option>
          <option>Б/в — стан нормальний</option>
        </select>

        <label className={css.label} htmlFor="product-description">
          Опис
        </label>
        <textarea id="product-description" rows={4} className={css.textarea} />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Контакти</legend>

        <label className={css.label} htmlFor="product-email">
          Email для зв'язку
        </label>
        <input id="product-email" className={css.input} />

        <label className={css.label} htmlFor="product-city">
          Місто
        </label>
        <input id="product-city" className={css.input} />
      </fieldset>

      <button type="submit" className={css.button}>
        Опублікувати
      </button>
    </form>
  );
}
