import { FC } from "react";
import styles from './Navigation.module.scss';

const Navigation: FC = () => {
    return <nav className={styles.navigation}>
        <ul className={styles.menu}>
            <li className={styles.item}>link 1</li>
            <li className={styles.item}>link 2</li>
            <li className={styles.item}>link 3</li>
        </ul>
    </nav>
}

export default Navigation;