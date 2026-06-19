"use client";
import { login } from "@/services/auth";
import css from "./LoginForm.module.css";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";

const LoginForm = () => {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const handleSubmit = async (formData: FormData) => {
    const body = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const res = await login(body);
    setUser(res.user);
    router.push("/");
  };

  return (
    <form className={css["loginForm"]} action={handleSubmit}>
      <p>bc-80@gmail.com</p>
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
