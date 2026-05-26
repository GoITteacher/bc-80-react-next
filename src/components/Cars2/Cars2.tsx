import { useEffect, useState } from "react";
import css from "./Cars2.module.css";
import ReactPaginate from "react-paginate";
import { getCarsByModel } from "../../services/carService";

const Cars2 = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [model, setModel] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (formData: FormData) => {
    const model = formData.get("query") as string;
    if (model.trim()) {
      setModel(model.trim());
      setPage(1);
    }
  };

  const handleChangePage = (e) => {
    setPage(e.selected + 1);
  };

  useEffect(() => {
    async function fetchCars() {
      if (model) {
        try {
          setIsLoading(true);
          const res = await getCarsByModel(model, page);
          setCars(res.items);
          setTotalPages(res.totalPages);
        } catch {
          console.log("Error");
        } finally {
          setIsLoading(false);
        }
      }
    }
    fetchCars();
  }, [model, page]);

  return (
    <div className={css["cars"]}>
      <form action={handleSubmit}>
        <input type="text" name="query" />
        <button>Search</button>
      </form>

      <p>
        Параметри пошуку: {model}, {page}
      </p>

      {isLoading && <p>LOADING ....</p>}

      {!isLoading && (
        <ul className={css["list"]}>
          {cars.map((el) => {
            return (
              <li key={el._id}>
                {el.make} - {el.model}
              </li>
            );
          })}
        </ul>
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handleChangePage}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        forcePage={page - 1}
        containerClassName={css.pagination}
        pageClassName={css.pageItem}
        pageLinkClassName={css.pageLink}
        previousClassName={css.pageItem}
        previousLinkClassName={css.pageLink}
        nextClassName={css.pageItem}
        nextLinkClassName={css.pageLink}
        breakClassName={css.pageItem}
        breakLinkClassName={css.pageLink}
        activeClassName={css.active}
        disabledClassName={css.disabled}
      />
    </div>
  );
};

export default Cars2;
