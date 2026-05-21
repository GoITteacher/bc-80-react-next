import css from "./CocktailCard.module.css";

interface CocktailCardProps {
  title: string;
  img: string;
  desc: string;
  isPremium?: boolean;
}

const CocktailCard = ({ title, img, desc, isPremium }: CocktailCardProps) => {
  return (
    <article
      className={
        isPremium ? css["cocktail-premium-card"] : css["cocktail-card"]
      }
    >
      <img className={css["image"]} src={img} alt={title} />
      <p className={css["title"]}>
        {title}
        {isPremium && "🔥"}
      </p>
      <p className={css["desc"]}>{desc}</p>
    </article>
  );
};

export default CocktailCard;
