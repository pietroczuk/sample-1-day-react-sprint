import { FC } from 'react';
import Cta from '../ui/cta/Cta';
import Logo from '../ui/logo/Logo';
import styles from './Header.module.scss';
import Navigation from './navigation/Navigation';

const Header: FC = () => {
    return <header className={styles.header}>
        <Logo />
        <Navigation />
        <Cta />
    </header>
}

export default Header;