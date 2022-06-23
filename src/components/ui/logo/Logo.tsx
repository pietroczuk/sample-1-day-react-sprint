import { FC } from "react";
import styles from './Logo.module.scss';

const Logo: FC = () => {
    return <div className={styles.logo}>
        50cent<span>official</span>
    </div>
}

export default Logo;