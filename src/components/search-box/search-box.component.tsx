import * as React from "react";

interface Props {
  onSearchBoxChange: () => void;
}

const SearchBox: React.FunctionComponent<Props> = (props: Props) => {
  const {onSearchBoxChange} = props;

  return (
    <React.Fragment>
      <input
        className="search-box__input"
        type="search"
        placeholder="Enter torrent hash"
        onChange={onSearchBoxChange}
      />
      <button
        className="search-box__button"
      >Search</button>
    </React.Fragment>
  );
};

export default SearchBox;
