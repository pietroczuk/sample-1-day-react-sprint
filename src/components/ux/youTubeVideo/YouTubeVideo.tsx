import { FC } from "react";

interface YouTubeVideoProps {
    videoId: string;
    title: string;
}

const YouTubeVideo: FC<YouTubeVideoProps> = ({ videoId, title }) => {
    return <iframe width="100%" height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
}

export default YouTubeVideo;