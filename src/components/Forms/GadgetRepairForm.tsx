import { Field, Form, Formik, FormikHelpers } from "formik";
import css from "./Form.module.css";
import * as Yup from "yup";
import clsx from "clsx";

const ValidationSchema = Yup.object().shape({
  type: Yup.string().min(2).max(20).required(),
  brand: Yup.string().min(2).max(20).required(),
  model: Yup.string().min(2).max(20).required(),
  summary: Yup.string().min(2).max(20).required(),
  detail: Yup.string().min(2).max(20).required(),
  budget: Yup.number().positive().integer().required(),
  contactName: Yup.string().min(2).max(20).required(),
  contactEmail: Yup.string().min(2).max(20).required(),
});

interface InitialValues {
  type: string;
  brand: string;
  model: string;
  summary: string;
  detail: string;
  budget: number;
  contactName: string;
  contactEmail: string;
}

const initialValues: InitialValues = {
  type: "",
  brand: "",
  model: "",
  summary: "",
  detail: "",
  budget: 0,
  contactName: "",
  contactEmail: "",
};

export default function GadgetRepairForm() {
  const handleSubmit = (
    values: InitialValues,
    actions: FormikHelpers<InitialValues>
  ) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      {(data) => {
        console.log(data);

        const hasError = (key: string) => {
          return Boolean(data.errors[key]);
        };

        return (
          <Form className={css.form}>
            <h2>Заявка на ремонт гаджета</h2>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Пристрій</legend>

              <label className={css.label} htmlFor="gadget-type">
                Тип пристрою
              </label>
              <Field
                id="gadget-type"
                name="type"
                type="text"
                className={clsx(css.input, hasError("type") && css.inval)}
                placeholder="Смартфон, ноутбук, планшет"
              />

              <label className={css.label} htmlFor="gadget-brand">
                Марка
              </label>
              <Field
                id="gadget-brand"
                name="brand"
                type="text"
                className={clsx(css.input, hasError("brand") && css.inval)}
                placeholder="Samsung, Apple, Asus"
              />

              <label className={css.label} htmlFor="gadget-model">
                Модель
              </label>
              <Field
                id="gadget-model"
                name="model"
                type="text"
                className={clsx(css.input, hasError("model") && css.inval)}
                placeholder="Galaxy S23, ZenBook 14"
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Проблема</legend>

              <label className={css.label} htmlFor="issue-summary">
                Короткий опис
              </label>
              <Field
                id="issue-summary"
                name="summary"
                type="text"
                className={css.input}
                placeholder="Не заряджається / тріщина екрану"
              />

              <label className={css.label} htmlFor="issue-detail">
                Детальний опис
              </label>
              <Field
                as="textarea"
                id="issue-detail"
                name="detail"
                rows={4}
                className={css.textarea}
                placeholder="Коли виникла проблема, що вже перевіряли"
              />

              <label className={css.label} htmlFor="budget">
                Орієнтовний бюджет
              </label>
              <Field
                id="budget"
                name="budget"
                type="number"
                min="0"
                step="1"
                className={css.input}
                placeholder="Напр., 1500 грн"
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Контакти</legend>

              <label className={css.label} htmlFor="contact-name">
                Ім’я
              </label>
              <Field
                id="contact-name"
                name="contactName"
                type="text"
                className={css.input}
                placeholder="Ваше ім’я"
              />

              <label className={css.label} htmlFor="contact-email">
                Email
              </label>
              <Field
                id="contact-email"
                name="contactEmail"
                type="email"
                className={css.input}
                placeholder="name@email.com"
              />
            </fieldset>

            <button type="submit" className={css.button}>
              Надіслати заявку
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
