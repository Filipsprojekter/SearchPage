import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui form">
        <div className="ui search">
          <form onSubmit={this.onInputSubmit} className="ui form">
            <div className="ui fluid icon input">
              <input
                type="text"
                placeholder="Search.."
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
              />
              <i className="search icon"></i>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
