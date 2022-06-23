import { FC } from "react";
import styles from './SingleAlbum.module.scss';

import cdImage from '../../ui/images/cd.png'
import SingleTrack from "./singleTrack/SingleTrack";

interface SingleAlbumProps {
    name: string;
    tracks: string[];
    cover: string;
    buy: string;
}

const SingleAlbum: FC<SingleAlbumProps> = ({ name, tracks, cover, buy }) => {
    return <div className={styles.albumContainer}>
        <div className={styles.albumDetailsCointaner}>
            <div className={styles.albumImageCover}>
                <div className={styles.mainImage}>
                    <img src={cover} width="100%" height="100%" alt={name} />
                </div>
                <div className={styles.cdImage}>
                    <img src={cdImage} width="100%" height="100%" alt="plyta dvd" />
                </div>
            </div>
            <div className={styles.albumDetails}>
                <div className={styles.albumName}>
                    {name}
                </div>
                <div className={styles.albumTracksContener}>
                    {tracks.map((track, index) => <SingleTrack key={index} trackName={track} />)}
                </div>
                <a href={buy} target="_blank" rel="noreferrer" className={styles.albumCta}>Kup album</a>
            </div>
        </div>
    </div>
}

export default SingleAlbum;