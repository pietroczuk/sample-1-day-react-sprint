import { FC } from "react";
import styles from './Navigation.module.scss';

const Navigation: FC = () => {
    return <nav className={styles.navigation}>
        <ul className={styles.menu}>
            <li className={styles.item}>O mnie</li>
            <li className={styles.item}>Albumy</li>
            <li className={styles.item}>Koncerty</li>
            <li className={styles.item}>Media</li>
        </ul>
    </nav>
}

export default Navigation;