import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_KEY from './api-key/index'
import SearchBar from './components/search-bar';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'iphoneXR'}, (videos) => {
            this.setState({ videos });
        });
           
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));