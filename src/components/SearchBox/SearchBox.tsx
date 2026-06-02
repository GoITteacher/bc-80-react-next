import css from "./SearchBox.module.css";

interface SearchBoxProps {
  value: string;
  setValue: (x: string) => void;
}

const SearchBox = ({ value, setValue }: SearchBoxProps) => {
  return (
    <div className={css["searchBox"]}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
      <button onClick={() => setValue("")}>Clear input</button>
    </div>
  );
};

export default SearchBox;
