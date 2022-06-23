import { FC } from 'react';
import SingleAlbum from '../../../ux/singleAlbum/SingleAlbum';
import styles from './AlbumsSection.module.scss';

const AlbumsSection: FC = () => {
    return <div id="albumy" className={styles.albumsContainer}>
        <div className={styles.wrapper}>
           <SingleAlbum title='Album 1' />
           <SingleAlbum title='Album 2' />
           <SingleAlbum title='Album 3' />
        </div>
    </div>
}

export default AlbumsSection;