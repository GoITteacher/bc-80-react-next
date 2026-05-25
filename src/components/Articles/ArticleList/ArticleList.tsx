import { Article } from "../../../types/articles";
import css from "./ArticleList.module.css";
interface ArticleListProps {
  articles: Article[];
}
const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <ul className={css["articleList"]}>
      {articles.map((el) => {
        return <li key={el.url}>{el.title}</li>;
      })}
    </ul>
  );
};

export default ArticleList;
