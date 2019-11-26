import React from 'react';
import { relative } from 'path';

const VideoDetail = ({video}) => {
    if (!video) {
        return (<div className="lead">Loading...</div>);
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    const styles = {
        postion: 'relative !important',
        height: '0 !important'
    }

    return (
        <div  className="video-detail col-md-8">
            <div className="embed-responsive emded-responsive-16by9">
                <iframe className="embed-responsive-item" width="560" height="315" src={url} style={styles}></iframe>
            </div>
            <div className="details">
                <div className="title">{ video.snippet.title }</div>
                <div className="description">{ video.snippet.description }</div>
            </div>
        </div>
    );
    



    
};

export default VideoDetail;