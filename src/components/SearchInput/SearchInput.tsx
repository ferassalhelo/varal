import style from "./SearchInput.module.css";

function SearchInput() {
  return (
    <div className={style.input_box}>
      <label htmlFor="search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </label>
      <input
        id="search"
        type="text"
        className={style.input}
        placeholder="Search a Term | Topic"
      />
    </div>
  );
}

export default SearchInput;
