import { FC } from "react";
import styles from './Navigation.module.scss';

interface NavigationProps {
    className?: string;
    onClick?: VoidFunction;
}

const Navigation: FC<NavigationProps> = ({ className, onClick }) => {
    return <nav className={`${styles.navigation} ${className}`}>
        <ul className={styles.menu}>
            <li className={styles.item}>
                <a className={styles.link} href="#omnie" onClick={onClick}>
                    O mnie
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="#albumy" onClick={onClick}>
                    Albumy
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="#koncerty" onClick={onClick}>
                    Koncerty
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.link} href="#media" onClick={onClick}>
                    Media
                </a>
            </li>
        </ul>
    </nav>
}

export default Navigation;