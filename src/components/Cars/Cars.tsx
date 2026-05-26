import { useEffect, useState } from "react";
import css from "./Cars.module.css";
import axios from "axios";
import { getCars } from "../../services/carService";

const Cars = () => {
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCars(page);
      setCars(data.items);
    }

    fetchData();
  }, []);

  return (
    <div className={css["cars"]}>
      <button onClick={() => setPage(page - 1)}>prev</button>
      <p>{page}</p>
      <button onClick={() => setPage(page + 1)}>next</button>
    </div>
  );
};

export default Cars;

//!=========================================
