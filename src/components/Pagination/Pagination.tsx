import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";
interface PaginationProps {
  totalPages: number;
  handleChange: (page: number) => void;
  currentPage: number;
}

const Pagination = ({
  totalPages,
  currentPage,
  handleChange,
}: PaginationProps) => {
  return (
    <ReactPaginate
      forcePage={currentPage - 1}
      breakLabel="..."
      nextLabel="Next"
      onPageChange={({ selected }) => handleChange(selected + 1)}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      previousLabel="Previous"
      renderOnZeroPageCount={null}
      containerClassName={css.pagination}
      activeClassName={css.active}
      disabledClassName={css.disabled}
      breakClassName={css.break}
      previousClassName={css.previous}
      nextClassName={css.next}
    />
  );
};

export default Pagination;
