"use client"
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeID }:{youtubeID: any}) => {
    return (
        <div>
            <YouTube 
            videoId={youtubeID}
            onReady={(event: any) => event.target.pauseVideo()}
            opts={{width: "100%", height: "385"}}
            />
        </div>
    )
}

export default VideoPlayer;