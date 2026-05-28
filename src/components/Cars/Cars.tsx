import { keepPreviousData, useQuery } from "@tanstack/react-query";
import css from "./Cars.module.css";
import { getCars } from "../../services/carService";
import SearchForm from "../SearchForm/SearchForm";
import CarList from "./CarList/CarList";
import { useState } from "react";

import Pagination from "../Pagination/Pagination";

const Cars = () => {
  const [make, setMake] = useState("");
  const [page, setPage] = useState(1);

  const carsQuery = useQuery({
    queryKey: ["cars", { make, page }],
    queryFn: () => getCars({ make, page }),
    placeholderData: keepPreviousData,
  });

  const cars = carsQuery.data?.items || [];
  const pageCount = carsQuery.data?.totalPages || 1;
  const { isLoading, isError } = carsQuery;

  const handleSubmit = (make: string) => {
    setPage(1);
    setMake(make);
  };

  return (
    <div className={css["cars"]}>
      <SearchForm callback={handleSubmit} />
      {isLoading && <p>Loading cars ...</p>}
      {isError && <p>Error</p>}
      <CarList items={cars} />

      <Pagination
        totalPages={pageCount}
        currentPage={page}
        handleChange={setPage}
      />
    </div>
  );
};

export default Cars;
