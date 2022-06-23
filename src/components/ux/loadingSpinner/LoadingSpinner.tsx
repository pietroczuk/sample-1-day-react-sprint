import { FC } from "react"
import styles from './LoadingSpinner.module.scss';

const LoadingSpinner: FC = () => {
    return <div className={styles.spinerContener}>
        <div className={styles.spiner}></div>
    </div>
}

export default LoadingSpinner;
