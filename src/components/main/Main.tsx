import { FC } from 'react';
import AboutSection from '../ui/pageSections/aboutSection/AboutSection';
import AlbumsSection from '../ui/pageSections/albumsSection/AlbumsSection';
import ConcertsSection from '../ui/pageSections/concertsSection/ConcertsSection';
import HeroMedia from '../ui/pageSections/heroMedia/HeroMedia';
import MediaSection from '../ui/pageSections/mediaSection/MediaSection';
import HeroImage from '../ux/heroImage/HeroImage';
import styles from './Main.module.scss';

const Main: FC = () => {
    return <main className={styles.main}>
        <HeroImage />
        <HeroMedia />
        <AboutSection />
        <AlbumsSection />
        <ConcertsSection />
        <MediaSection />
    </main>
}

export default Main;