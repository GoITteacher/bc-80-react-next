import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from "./OrderForm.module.css";
import * as Yup from "yup";
import clsx from "clsx";

const OrderFormSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(2, "Не менше двох символів")
    .max(15, "Не більше 15 символів")
    .required("Поле є обовязковим"),

  email: Yup.string()
    .trim()
    .email("Має бути у форматі awdawd@gmail.com")
    .required("Поле є обовязковим"),

  delivery: Yup.string().oneOf(
    ["pickup", "courier", "drone"],
    "Оберіть валідне значення"
  ),

  restrictions: Yup.array()
    .of(Yup.string().oneOf(["vegan", "gluten-free", "nut-free"]))
    .default([]),
  deliveryTime: Yup.string().oneOf(["morning", "afternoon", "evening"]),
  message: Yup.string().max(500),
});

type DeliverType = "pickup" | "courier" | "drone";

interface OrderFormValues {
  username: string;
  email: string;
  delivery: DeliverType;
  restrictions: string[];
  deliveryTime: "morning" | "afternoon" | "evening";
  message: string;
}

const initialValues: OrderFormValues = {
  username: "test",
  email: "awdawd@gmail.com",
  delivery: "pickup",
  restrictions: [],
  deliveryTime: "morning",
  message: "Оплата за товар",
};

export default function OrderForm() {
  const hadnleSubmit = (
    values: OrderFormValues,
    actions: FormikHelpers<OrderFormValues>
  ) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={OrderFormSchema}
      initialValues={initialValues}
      onSubmit={hadnleSubmit}
    >
      {(data) => {
        console.log(data);
        data.errors?.username;

        return (
          <Form className={css.form}>
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Client Info</legend>
              <label className={css.label}>Name</label>
              <Field
                type="text"
                name="username"
                className={clsx(
                  css.input,
                  Boolean(data.errors?.username) && css["invalid-input"]
                )}
              />

              <label className={css.label}>Email</label>
              <Field type="email" name="email" className={css.input} />
              <ErrorMessage
                component="span"
                name="email"
                className={css.error}
              />
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Delivery method</legend>
              <ErrorMessage
                component="span"
                name="delivery"
                className={css.error}
              />

              <label className={css.option}>
                <Field type="radio" name="delivery" value="pickup" />
                Pickup
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="courier" />
                Courier
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="drone" />
                Drone delivery
              </label>
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Dietary restrictions</legend>
              <ErrorMessage
                component="span"
                name="restrictions"
                className={css.error}
              />

              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="vegan" />
                Vegan
              </label>
              <label className={css.option}>
                <Field
                  type="checkbox"
                  name="restrictions"
                  value="gluten-free"
                />
                Gluten-free
              </label>
              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="nut-free" />
                Nut-free
              </label>
            </fieldset>

            <label className={css.label}>Preferred delivery time</label>
            <ErrorMessage
              component="span"
              name="deliveryTime"
              className={css.error}
            />
            <Field as="select" name="deliveryTime" className={css.input}>
              <option value="" disabled>
                -- Choose delivery time --
              </option>
              <option value="morning">Morning (8:00-12:00)</option>
              <option value="afternoon">Afternoon (12:00-16:00)</option>
              <option value="evening">Evening (16:00-20:00)</option>
            </Field>

            <label className={css.label}>Additional message</label>
            <ErrorMessage
              component="span"
              name="message"
              className={css.error}
            />
            <Field
              as="textarea"
              name="message"
              rows={4}
              className={css.textarea}
            ></Field>

            <button type="submit" className={css.button}>
              Place order
            </button>

            <button onClick={() => data.resetForm()}>Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
}
