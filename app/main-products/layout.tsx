import css from "./Layout.module.css";
interface LayoutProps {
  children: React.ReactNode;
  categories: React.ReactNode;
  popular: React.ReactNode;
}
const Layout = ({ children, categories }: LayoutProps) => {
  return (
    <div className={css["layout"]}>
      {categories}
      {children}
    </div>
  );
};

export default Layout;
