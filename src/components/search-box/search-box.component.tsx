import * as React from "react";

interface State {
  value: string;
  isSearchButtonDisabled: boolean;
}

interface Props {
  onSearchBoxChange: () => void;
}

class SearchBox extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      isSearchButtonDisabled: false,
    };

    this._handleSearchBoxChange = this._handleSearchBoxChange.bind(this);
  }

  _handleSearchBoxChange(evt) {
    this.setState({
      value: evt.target.value,
      isSearchButtonDisabled: evt.target.value === 'Hello'
    });
  }

  render() {
    return (
      <React.Fragment>
        <input
          className="search-box__input"
          type="search"
          placeholder="Enter torrent hash"
          onChange={this._handleSearchBoxChange}
        />
        <button
          className="search-box__button"
          type="submit"
          disabled={this.state.isSearchButtonDisabled}
          style={{cursor: `${this.state.isSearchButtonDisabled ? `default` : `pointer`}`}}
        >Search</button>
      </React.Fragment>
    );
  }
};

export default SearchBox;
