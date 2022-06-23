import { FC } from "react";
import styles from './SingleAlbum.module.scss';

import albumImage from '../../ui/images/albums/album1.jpg';
import cdImage from '../../ui/images/cd.png'

interface SingleAlbumProps {
    id?: number;
    title: string;
    tracks?: []
}

const SingleAlbum: FC<SingleAlbumProps> = ({ id, title, tracks }) => {
    // const albumImg = 
    return <div className={styles.albumContainer}>
        <div className={styles.albumImageCover}>
            <img src={albumImage} />
            <img src={cdImage} />
        </div>
        <div className={styles.albumName}>
            {title}
        </div>
    </div>
}

export default SingleAlbum;