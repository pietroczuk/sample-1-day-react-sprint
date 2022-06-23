import { FC, useEffect, useState } from 'react';
import ContactCta from '../ui/contactCta/ContactCta';
import Logo from '../ui/logo/Logo';
import styles from './Header.module.scss';
import Navigation from './navigation/Navigation';

const Header: FC = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 300) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };
    }, [])

    return <header className={`${styles.header} ${isScrolling ? styles.darkBackground : ''}`}>
        <Logo />
        <Navigation />
        <ContactCta />
    </header>
}

export default Header;