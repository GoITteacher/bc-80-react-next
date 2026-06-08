"use client";
import Link from "next/link";
import css from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isAuth, setIsAuth] = useState(true);

  return (
    <header className={css["header"]}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/online-users">Online Users</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
