import { FC } from 'react';
// import { OverlayContextProvider } from '../context/OverlayContext';
import ContactCta from '../ui/contactCta/ContactCta';
import Logo from '../ui/logo/Logo';
import styles from './Header.module.scss';
import Navigation from './navigation/Navigation';

const Header: FC = () => {
    return <header className={styles.header}>
        <Logo />
        <Navigation />
        <ContactCta />
    </header>
}

export default Header;