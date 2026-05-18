import { getCocktailDetails } from "@/lib/cocktails-api";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const details = await getCocktailDetails(id);

  return (
    <div className={styles.page}>
      <Link className={styles.backLink} href="/cocktails">
        Back to cocktails
      </Link>

      <section className={styles.hero}>
        <div className={styles.media}>
          <img
            className={styles.image}
            src={details.drinkThumb}
            width={560}
            height={560}
            priority
            alt={details.drink}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className={styles.content}>
          <span className={styles.badge}>Signature serve</span>
          <h1 className={styles.title}>{details.drink}</h1>
          <p className={styles.description}>{details.description}</p>
          <ul className={styles.meta}>
            <li>
              <span className={styles.metaLabel}>Category</span>
              <span className={styles.metaValue}>{details.category}</span>
            </li>
            <li>
              <span className={styles.metaLabel}>Alcohol</span>
              <span className={styles.metaValue}>{details.alcoholic}</span>
            </li>
            <li>
              <span className={styles.metaLabel}>Glass</span>
              <span className={styles.metaValue}>{details.glass}</span>
            </li>
          </ul>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href="/cocktails">
              Explore more cocktails
            </Link>
            <Link className={styles.secondaryAction} href="/">
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.detailsGrid}>
        <div className={styles.infoCard}>
          <h2>Short description</h2>
          <p>{details.shortDescription}</p>
        </div>
        <div className={styles.infoCard}>
          <h2>Instructions</h2>
          <p>{details.instructions}</p>
        </div>
      </section>

      <section className={styles.ingredients}>
        <h2>Ingredients</h2>
        <ul className={styles.ingredientList}>
          {details.ingredients.map((ingredient) => (
            <li key={ingredient.ingredientId}>
              <span className={styles.ingredientTitle}>{ingredient.title}</span>
              <span className={styles.ingredientMeasure}>
                {ingredient.measure}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.more}>
        <div className={styles.moreCard}>
          <h2>Keep the menu flowing</h2>
          <p>
            Refresh the list for new inspiration, or save this cocktail to come
            back to later.
          </p>
          <Link className={styles.secondaryAction} href="/cocktails">
            Browse full list
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
