"use client";
import { useParams } from "next/navigation";
import css from "./UpdateUserForm.module.css";

const UpdateUserForm = () => {
  const params = useParams();
  const id = params.id;

  return (
    <div className={css["updateUserForm"]}>
      <p>Update user for {id}</p>

      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  );
};

export default UpdateUserForm;
