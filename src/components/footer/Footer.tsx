import { FC } from 'react';
import Navigation from '../header/navigation/Navigation';
import Logo from '../ui/logo/Logo';
import SocialLinks from '../ui/socialLinks/SocialLinks';
import styles from './Footer.module.scss';

const Footer: FC = () => {
    return <footer className={styles.footer}>
        <div className={styles.details}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.navlinks}>
                <Navigation />
            </div>
            <div className={styles.socials}>
                <SocialLinks />
            </div>
        </div>
        <div className={styles.copyright}>Copyright © 2022 - 50CentOfficial</div>
    </footer>
}

export default Footer;