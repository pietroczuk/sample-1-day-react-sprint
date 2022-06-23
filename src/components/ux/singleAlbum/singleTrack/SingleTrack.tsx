import { FC, useState } from "react";
import styles from './SingleTrack.module.scss';
import playIcon from '../../../ui/icons/play.svg';
import pauseIcon from '../../../ui/icons/pause.svg';

interface SingleTrackProps {
    trackName: string;
}

const SingleTrack: FC<SingleTrackProps> = ({ trackName }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const onClickHandler = () => {
        setIsPlaying(prev => !prev);
    }

    return <div className={styles.trackContainer}>
        <div className={`${styles.icon} ${isPlaying ? styles.active : ''}`} onClick={onClickHandler} >
            <img src={isPlaying ? pauseIcon : playIcon} alt="posłuchaj" width="100%" height="100%" />
        </div>
        <div className={styles.name}>
            {trackName}
        </div>
    </div>
}

export default SingleTrack;