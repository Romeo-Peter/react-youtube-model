import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import API_KEY from './api-key/index';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-details';

class App extends Component {

    constructor(props) {
        super(props)
        
        // Initializes state
        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('youtube');
           
    }

    videoSearch(term) {
        YTSearch( {key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        } );
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <div className="row">
                    <VideoDetail video={ this.state.selectedVideo } />

                    {/* Passing callback for when video get selected in the 'video-list-item' component */}
                    <VideoList videos={this.state.videos} onVideoSelect = { selectedVideo => this.setState({ selectedVideo }) } />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));