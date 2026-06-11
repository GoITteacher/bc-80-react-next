import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css["header"]}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cocktails">Cocktails</Link>
          </li>
          <li>
            <Link href="/cocktails/new-cocktails">New Cocktails</Link>
          </li>
          <li>
            <Link href="/cocktails/popular">Popular Cocktails</Link>
          </li>
          <li>
            <Link href="/settings/profile">Settings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
