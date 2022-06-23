import { FC } from 'react';
import albumsData from '../../../../utils/albumsData/albumsData';
import SingleAlbum from '../../../ux/singleAlbum/SingleAlbum';
import styles from './AlbumsSection.module.scss';

const AlbumsSection: FC = () => {
    const albums = albumsData();
    
    return <div id="albumy" className={styles.albumsContainer}>
        <div className={styles.wrapper}>
            {albums.map((album, index)=> <SingleAlbum key={index} {...album}/>)}
        </div>
    </div>
}

export default AlbumsSection;