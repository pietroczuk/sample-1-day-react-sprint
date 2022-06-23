import { FC } from 'react';
import AboutSection from '../ui/pageSections/aboutSection/AboutSection';
import HeroMedia from '../ui/pageSections/heroMedia/HeroMedia';
import HeroImage from '../ux/heroImage/HeroImage';
import styles from './Main.module.scss';

const Main: FC = () => {
    return <main className={styles.main}>
        <HeroImage />
        <HeroMedia />
        <AboutSection /> 
    </main>
}

export default Main;