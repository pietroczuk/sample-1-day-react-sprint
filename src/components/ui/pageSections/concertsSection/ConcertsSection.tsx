import { FC } from "react";
import styles from './ConcertsSection.module.scss';
import concertsImage from '../../images/concerts.jpg';
import concertsData from '../../../../utils/concertsData/concertsData.json';
import SingleConcert from "../../../ux/singleConcert/SingleConcert";

const ConcertsSection: FC = () => {
    return <div id="koncerty" className={styles.concertsCointainer} style={{ background: `url(${concertsImage}) no-repeat center center fixed #000`, backgroundSize: "cover" }}>
        
        <div className={styles.concertsWrapper}>
            {concertsData.map((concert, index) => <SingleConcert key={index} {...concert} />)}
        </div>
        <div className={styles.backgroundOverlay}></div>
    </div>
}
export default ConcertsSection;