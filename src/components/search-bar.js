import React, { Component } from 'react';
// Class base component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {SearchTerm: 'starting value'};
    }

    render() {

        return(
            <div> 
                <input
                value = {this.state.SearchTerm} 
                onChange={(e) => this.setState({ SearchTerm: e.target.value} )} />
            </div>
        )
    }
}
export default SearchBar;