import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const SearchBar = ({ setSearchItem, taskList }) => {
  const handleSearchChange = (e) => {
    if (!e.target.value) {
      return setSearchItem(taskList);
    }
    const resArry = taskList.filter(
      (list) =>
        list.Name.includes(e.target.value) ||
        list.Description.includes(e.target.value) ||
        list.Date.includes(e.target.value) ||
        list.Status.includes(e.target.value)
    );
    setSearchItem(resArry);
  };
  return (
    <header>
      <form onSubmit={(e) => e.preventDefault()} className="search">
        <input
          type="text"
          className="search-input"
          id="search"
          onChange={handleSearchChange}
        />
        <button className="search-button">
          <HiOutlineMagnifyingGlass />
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
