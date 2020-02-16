import React from "react";
import SearchBar from "./SearchBar";
import unsplashApi from "../api/unsplashApi";
import ImageList from "./ImageList";
import SearchResult from "./SearchResult";
import Button from './Button';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplashApi.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
        <div className="container">
        <div style={{margin:'10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <SearchResult>
            <ImageList images={this.state.images}/>
        </SearchResult>
        </div>
        <Button buttonText="Hover me" buttonText2="Hover me too" buttonText3="Hover me three"></Button>
        </div>

    
     
    );
  }
}

export default App;
