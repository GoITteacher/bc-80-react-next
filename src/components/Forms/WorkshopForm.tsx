import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./Form.module.css";
import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  workshopPhone: Yup.string().matches(
    /\+38-\d{3}-\d{2}-\d{4}/,
    "Example: +38-099-12-1234"
  ),
});

interface InitialValues {
  workshopName: string;
  workshopEmail: string;
  workshopPhone: string;
  track: string;
  level: string;
  question: string;
}

const initialValues: InitialValues = {
  workshopName: "",
  workshopEmail: "",
  workshopPhone: "",
  track: "",
  level: "",
  question: "",
};

export default function WorkshopForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={ValidationSchema}
    >
      <Form className={css.form}>
        <h2>Реєстрація на воркшоп</h2>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Учасник</legend>

          <label className={css.label} htmlFor="workshop-name">
            Ім’я та прізвище
          </label>
          <Field id="workshop-name" name="workshopName" className={css.input} />

          <label className={css.label} htmlFor="workshop-email">
            Email
          </label>
          <Field
            id="workshop-email"
            name="workshopEmail"
            className={css.input}
          />

          <label className={css.label} htmlFor="workshop-phone">
            Телефон
          </label>
          <Field
            id="workshop-phone"
            name="workshopPhone"
            className={css.input}
          />
          <ErrorMessage
            name="workshopPhone"
            component="span"
            className={css.error}
          />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Формат</legend>

          <label className={css.label} htmlFor="track">
            Трек
          </label>
          <Field as="select" id="track" name="track" className={css.input}>
            <option>Обери трек</option>
            <option>Product design</option>
            <option>Frontend</option>
            <option>Growth & marketing</option>
          </Field>

          <p className={css.label}>Рівень досвіду</p>

          <label className={css.option}>
            <Field type="radio" name="level" value="begginer" />
            Початківець
          </label>

          <label className={css.option}>
            <Field type="radio" name="level" value="middle" />
            Middle
          </label>

          <label className={css.option}>
            <Field type="radio" name="level" value="senior" />
            Senior
          </label>
        </fieldset>

        <label className={css.label} htmlFor="workshop-question">
          Питання чи побажання
        </label>

        <Field
          as="textarea"
          id="workshop-question"
          name="question"
          rows={4}
          className={css.textarea}
        />

        <button type="submit" className={css.button}>
          Зареєструватися
        </button>
      </Form>
    </Formik>
  );
}
