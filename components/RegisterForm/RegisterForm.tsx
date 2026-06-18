"use client";
import { register } from "@/services/auth";
import css from "./RegisterForm.module.css";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const body = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      name: formData.get("name") as string,
      typeAccount: formData.get("typeAccount") as string,
    };

    const res = await register(body);
    router.push("/sign-in");
  };

  return (
    <form className={css["register"]} action={handleSubmit}>
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="typeAccount" value="freeUser" />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
