import CategoryList from "@/components/CategoryList/CategoryList";
import css from "./Layout.module.css";
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={css["layout"]}>
      <aside className={css["sidebar"]}>
        <h5>BOOKS SIDEBAR</h5>
        <CategoryList />
      </aside>
      <div className={css["page"]}>{children}</div>
    </main>
  );
};

export default Layout;
