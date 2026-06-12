import Link from "next/link";
import css from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={css.header}>
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">dashboard</Link>
        </li>
        <li>
          <Link href="/main-products">Products</Link>
        </li>
        <li>
          <Link href="/recipes">Recipes</Link>
        </li>
        <li>
          <Link href="/quotes">Quotes</Link>
        </li>
        <li>
          <Link href="/todos">Todos</Link>
        </li>
      </ul>
      <hr />
    </header>
  );
}
