import { FC } from "react";
import styles from './SingleConcert.module.scss';

interface SingleConcertProps {
    date: string,
    city: string,
    place: string
}

const SingleConcert: FC<SingleConcertProps> = ({ date, city, place }) => {
    return <div className={styles.singleConcertWrapper}>
        <div className={styles.date}>{date}</div>
        <div className={styles.details}>
            <div className={styles.city}>{city}</div>
            <div className={styles.place}>{place}</div>
        </div>

    </div>
}

export default SingleConcert;