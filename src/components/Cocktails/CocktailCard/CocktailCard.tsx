import { useState } from "react";
import { Cocktail } from "../../../types/cocktails";
import css from "./CocktailCard.module.css";
import Modal from "../../Modal/Modal";
import { useModal } from "../../../hooks/useModal";
import { useQuery } from "@tanstack/react-query";

interface CocktailCardProps {
  data: Cocktail;
}
const CocktailCard = ({ data }: CocktailCardProps) => {
  const [isOpenDesc, openDesc, closeDesc] = useModal();
  const [isOpenImage, openImage, closeImage] = useModal();
  const [isOpenFullInfo, openFullInfo, closeFullInfo] = useModal();

  return (
    <li className={css["cocktailCard"]}>
      <img src={data.drinkThumb} alt="" width={100} />
      <p>{data.drink}</p>
      <button onClick={openDesc}>Show Desc</button>
      <button onClick={openImage}>Show Image</button>
      <button onClick={openFullInfo}>Show Full Info</button>

      {isOpenDesc && (
        <Modal onClose={closeDesc}>
          <p>{data.description}</p>
        </Modal>
      )}

      {isOpenImage && (
        <Modal onClose={closeImage}>
          <img src={data.drinkThumb} alt="" width="500" />
        </Modal>
      )}

      {isOpenFullInfo && (
        <Modal onClose={closeFullInfo}>
          <img src={data.drinkThumb} alt="" width="500" />
          <p>{data.description}</p>
        </Modal>
      )}
    </li>
  );
};

export default CocktailCard;
