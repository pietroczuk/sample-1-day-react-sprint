import { FC } from "react";
import styles from './SingleTrack.module.scss';

interface SingleTrackProps {
    trackName: string;
}

const SingleTrack: FC<SingleTrackProps> = ({ trackName }) => {
    return <div className={styles.trackContainer}>
        {trackName}
    </div>
}

export default SingleTrack;