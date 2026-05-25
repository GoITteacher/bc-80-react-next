import { useState } from "react";
import css from "./Articles.module.css";
import { Article } from "../../types/articles";
import { getArticles } from "../../services/articleService";
import SearchForm from "./SearchForm/SearchForm";
import ArticleList from "./ArticleList/ArticleList";

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const onSubmit = async (query: string, page: number) => {
    try {
      const res = await getArticles(query, page);
      console.log(res);
      setArticles(res.articles);
    } catch {}
  };

  return (
    <div className={css["articles"]}>
      <SearchForm onSubmit={onSubmit} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default Articles;
