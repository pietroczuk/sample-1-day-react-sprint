import { FC } from 'react';
import albumsData from '../../../../utils/albumsData/albumsData';
import SingleAlbum from '../../../ux/singleAlbum/SingleAlbum';
import styles from './AlbumsSection.module.scss';

const AlbumsSection: FC = () => {
    const albums = albumsData();

    return <div id="albumy" className={styles.albumsContainer}>
        <h2 className={styles.sectionTitle}>Albumy studyjne</h2>
        <p className={styles.sectionSubtitle}>Współpracowałem z takimi muzykami i zespołami jak <strong>Dr. Dre, Eminem, Snoop Dogg, G-Unit, Lil’ Kim, DMX, Onyx, Timbaland, Ne-Yo, Justin Timberlake, T-Pain, Nicole Scherzinger, E-40, Missy Elliott, The Black Eyed Peas, Ciara, M.O.P., Kool G Rap, Game, Busta Rhymes</strong> czy <strong>Michael Jackson.</strong>
        </p>
        <div className={styles.wrapper}>
            {albums.map((album, index) => <SingleAlbum key={index} {...album} />)}
        </div>
    </div>
}

export default AlbumsSection;