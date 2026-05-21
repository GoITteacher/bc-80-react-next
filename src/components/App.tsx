import Footer from "../lesson-components/part1/Footer/Footer";
import css from "./App.module.css";
import CocktailList from "./CocktailList/CocktailList";
import Header from "./Header/Header";

const App = () => {
  return (
    <div className={css["page"]}>
      <Header />
      <CocktailList />
      <Footer />
    </div>
  );
};

export default App;
