import css from "./Header.module.css";

export default function Header() {
  console.log(css);

  return (
    <header className={css["header"]}>
      <h1>Hello</h1>
      <nav className={css["header-navigation"]}></nav>

      <button className={css["button"]}></button>
    </header>
  );
}
