import React, { Component } from 'react';
// Class base component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {SearchTerm: ''};
    }

    render() {

        return(
            <div className="form-group"> 
                <input className="form-control mt-3" value = {this.state.SearchTerm} 
                onChange={(e) => this.onInputChange(e.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({ SearchTerm: term});
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;