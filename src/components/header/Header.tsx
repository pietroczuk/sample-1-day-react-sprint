import { FC, useEffect, useState } from 'react';
import ContactCta from '../ui/contactCta/ContactCta';
import HamburgerMenu from '../ui/hamburgerMenu/HamburgerMenu';
import Logo from '../ui/logo/Logo';
import styles from './Header.module.scss';
import Navigation from './navigation/Navigation';

const Header: FC = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const mobileMenuClickHandler = () => {
        setIsMobileMenuOpen(prev => !prev);
    }
    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 300) {
                !isScrolling && setIsScrolling(true);
            } else {
                isScrolling && setIsScrolling(false);
            }
        };
    }, [isScrolling])

    return <header className={`${styles.header} ${isScrolling ? styles.darkBackground : ''}`}>
        <Logo />
        <Navigation className={styles.desctopNavigation} />
        <ContactCta className={styles.desctopCta} />
        <HamburgerMenu isOpen={isMobileMenuOpen} onClick={mobileMenuClickHandler} />
        <div className={`${styles.mobileMenuCointaner} ${isMobileMenuOpen ? styles.open : ''}`}>
            <div className={styles.mobileMenuWrapper}>
                <Navigation className={styles.mobileNavigation} onClick={mobileMenuClickHandler} />
                <ContactCta className={styles.mobileCta} onClick={mobileMenuClickHandler} />
            </div>
        </div>
    </header>
}

export default Header;