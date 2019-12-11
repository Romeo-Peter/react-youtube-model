import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const videoThumbnail = video.snippet.thumbnails

    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object mr-3" src={ videoThumbnail.default.url }
                        width={ videoThumbnail.default.width } height={ videoThumbnail.default.height } 
                        alt={video.snippet.title} />
                </div>
                <div className="media-body d-block">
                    <div className="media-heading">{ video.snippet.title }</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;