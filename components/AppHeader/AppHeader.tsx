"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";
import { selectChangeLang, selectLang, useLangStore } from "@/stores/langStore";
import { useAuthStore } from "@/stores/authStore";
import { logout } from "@/services/auth";

export default function AppHeader() {
  const lang = useLangStore(selectLang);
  const changeLang = useLangStore(selectChangeLang);
  const { user, isAuth, clearUser } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    clearUser();
  };

  return (
    <header className={css.header}>
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/tasks">Tasks</Link>
        </li>
        <li>
          <Link href="/bucket">Bucket</Link>
        </li>
      </ul>
      <select
        name="lang"
        value={lang}
        onChange={(e) => changeLang(e.target.value)}
      >
        <option value="en">En</option>
        <option value="ua">Ua</option>
        <option value="pl">Pl</option>
      </select>

      <div>
        {isAuth && <button onClick={handleLogout}>Logout</button>}
        {!isAuth && <Link href={"/sign-in"}>Login</Link>}
      </div>
    </header>
  );
}
