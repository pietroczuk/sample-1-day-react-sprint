import { FC } from "react";
import styles from './Navigation.module.scss';

interface NavigationProps {
    className?: string;
}

const Navigation: FC<NavigationProps> = ({ className }) => {
    return <nav className={`${styles.navigation} ${className}`}>
        <ul className={styles.menu}>
            <li className={styles.item}>
                <a className={styles.link} href="#omnie">
                    O mnie
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="#albumy">
                    Albumy
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="#koncerty">
                    Koncerty
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="#media">
                    Media
                </a>
            </li>
        </ul>
    </nav>
}

export default Navigation;