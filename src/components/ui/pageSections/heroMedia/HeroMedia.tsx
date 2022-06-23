import { FC } from "react";
import YouTubeVideo from "../../../ux/youTubeVideo/YouTubeVideo";
import styles from './HeroMedia.module.scss';

const HeroMedia:FC = () => {
    return <div className={styles.heroMediaContener}>
    <div className={styles.videoContener}>
        <YouTubeVideo videoId='IEFB5jVEvqo' title="PEPSI Superbowl" />
    </div>
    <div className={styles.videoDescription}>
        <p className={styles.eventDate}>14 luty 2022</p>
        <h2 className={styles.eventLabel}>PEPSI Superbowl<br/>50 cent, Dr. Dre, Snoop Dogg, Eminem, Mary J. Blige, Kendrick Lamar</h2>
        <div className={styles.eventDescription}>
            Halftime Show podczas Super Bowl to zawsze ogromne wydarzenie, nie tylko muzyczne. W tym roku finał rozgrywek futbolu amerykańskiego zdominował <span>hip-hop</span>.
        </div>
    </div>
</div>
}

export default HeroMedia;