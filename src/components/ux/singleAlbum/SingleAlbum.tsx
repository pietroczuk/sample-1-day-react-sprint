import { FC } from "react";
import styles from './SingleAlbum.module.scss';

import cdImage from '../../ui/images/cd.png'
import SingleTrack from "./singleTrack/SingleTrack";

interface SingleAlbumProps {
    name: string;
    tracks: string[];
    cover: string;
}

const SingleAlbum: FC<SingleAlbumProps> = ({ name, tracks, cover }) => {
    // const albumImg = 
    return <div className={styles.albumContainer}>
        <div className={styles.albumImageCover}>
            <div className={styles.mainImage}>
                <img src={cover} width="100%" height="100%" alt={name} />
            </div>
            <div className={styles.cdImage}>
                <img src={cdImage} width="100%" height="100%" alt="plyta dvd" />
            </div>
        </div>
        <div className={styles.albumName}>
            {name}
        </div>
        <div className={styles.albumTracksContener}>
            {tracks.map((track, index) => <SingleTrack key={index} trackName={track} />)}
        </div>
        <div className={styles.albumCta}>Kup album</div>

    </div>
}

export default SingleAlbum;