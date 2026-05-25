import { useId } from "react";
import css from "./OrderForm.module.css";

export default function OrderForm() {
  const id = useId();

  // const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const form = e.target;
  //   const borys = new FormData(form);

  //   const data = {
  //     name: borys.get("username"),
  //     email: borys.get("email"),
  //     deliveryMethod: borys.get("delivery"),
  //   };

  //   form.reset();
  // };

  const handleSubmit = (borys: FormData) => {
    const data = {
      name: borys.get("username"),
      email: borys.get("email"),
      delivery: borys.get("delivery"),
    };
    console.log(data);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Client info:</legend>

        <label htmlFor={`name${id}`} className={css.label}>
          Name
        </label>
        <input
          id={`name${id}`}
          className={css.input}
          type="text"
          name="username"
        />

        <label htmlFor={`email${id}`} className={css.label}>
          Email
        </label>
        <input
          id={`email${id}`}
          className={css.input}
          type="email"
          name="email"
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Delivery method:</legend>
        <label className={css.option}>
          <input type="radio" name="delivery" value="pickup" defaultChecked />
          Pickup
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>

      <button type="submit" className={css.button}>
        Place order
      </button>
    </form>
  );
}
