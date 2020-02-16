import React from 'react';
import './SearchResult.css';

class SearchResult extends React.Component{
    render(){
        return(
            <div className="container" id="borderdiv">
                {this.props.children}
            </div>
        )
    }
    
}

export default SearchResult;