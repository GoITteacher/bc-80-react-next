import CategoryList from "@/components/CategoryList/CategoryList";
import css from "./Layout.module.css";
import Link from "next/link";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={css["layout"]}>
      <aside className={css["sidebar"]}>
        <h5>Settings SIDEBAR</h5>
        <ul>
          <li>
            <Link href="/settings/profile">Profile</Link>
          </li>
          <li>
            <Link href="/settings/notification">Notification</Link>
          </li>
          <li>
            <Link href="/settings/feed">Feed</Link>
          </li>
        </ul>
      </aside>
      <div className={css["page"]}>{children}</div>
    </main>
  );
};

export default Layout;
