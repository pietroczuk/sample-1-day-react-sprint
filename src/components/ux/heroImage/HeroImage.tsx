import { FC } from "react";
import styles from './HeroImage.module.scss';
import heroImage from '../../ui/images/hero.jpg'

const HeroImage: FC = () => {
    return <div className={styles.heroCointaner}>
        <div className={styles.leftContent}>napis lewy</div>
        <div className={styles.rightContent}>napis prawy</div>
        
        <div className={styles.heroImage}>
            <img src={heroImage} alt="this is 50" height="100%" width="auto"/>
        </div>
    </div>
}
export default HeroImage;