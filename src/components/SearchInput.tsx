import { Dispatch, FC, SetStateAction } from "react";

type SearchInputProps = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

const SearchInput: FC<SearchInputProps> = ({ searchValue, setSearchValue }) => {
  return (
    <input
      className="search-input"
      type="text"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search"
      autoFocus
    />
  );
};
export default SearchInput;
