import { FC } from "react";
import GalleryCointaner from "../../../ux/galleryCointaner/GalleryCointaner";
import YouTubeVideo from "../../../ux/youTubeVideo/YouTubeVideo";
import styles from './MediaSection.module.scss';

const MediaSection: FC = () => {
    return <div id="media" className={styles.mediaConainer}>
        <h2 className={styles.sectionTitle}>Video</h2>
        <p className={styles.sectionSubtitle}>
            Pod koniec 2010 roku założyłem wytwórnię <strong>G-Note Records</strong>, która ma celu wydawanie muzyków pop/dance/R&B. Dystrybucją zajmuje się moja pierwsza wytwórnia <strong>G-Unit Records. </strong> w Nowym Jorku.
        </p>
        <div className={styles.videoCointainer}>
            <div className={styles.videoWrapper}>
                <YouTubeVideo videoId='qLp3d4keNik' title="Sire" />
            </div>
            <div className={styles.videoWrapper}>
                <YouTubeVideo videoId='OUeaAOIAbXs' title="In da club" />
            </div>
            <div className={styles.videoWrapper}>
                <YouTubeVideo videoId='nKoP1URluiY' title="Pop" />
            </div>
        </div>

        <h2 className={styles.sectionTitle}>Galeria</h2>
        <p className={styles.sectionSubtitle}>
            Obecnie pracuje nad szóstym studyjnym albumem pt. <strong>Street King Immortal</strong>, którego premiera nie jest znana. Pierwotnie płyta miała zostać wydana 16 września 2014 r., jednakże podjęłem decyzję o anulowaniu premiery na rzecz reaktywacji zespołu <strong>G-Unit</strong>.
        </p>
        <GalleryCointaner />
    </div>
}

export default MediaSection;