import { FC } from "react";
import styles from './AboutSection.module.scss';
import aboutImage from '../../images/about.jpg';

const AboutSection: FC = () => {
    return <div  className={styles.aboutContener} style={{ background: `url(${aboutImage}) no-repeat right center fixed #000`, backgroundSize: "contain" }}>
        <div id="omnie" className={styles.wrapper}>
            <div className={styles.content}>

                <p className={styles.sectionName}>O mnie</p>
                <h1 className={styles.sectionHeading}>Curtis James Jackson III</h1>
                <p className={styles.sectionSubheading}>amerykański raper, aktor i przedsiębiorca</p>

                <p className={styles.sectionDescription}>
                    Międzynarodową rozpoznawalność zyskałem po wydaniu debiutanckiego albumu <strong>Get Rich or Die Tryin’ (2003 r.)</strong> oraz drugiej płyty <strong>The Massacre</strong> dwa lata później.
                </p>
                <p className={styles.sectionDescription}>
                    Jako początkujący aktor zadebiutowałem w 2005 roku w swoim filmie autobiograficznym pt. Get Rich or Die Tryin’.
                </p>
                <p className={styles.sectionDescription}>
                    Jestem również właścicielem firmy produkującej słuchawki SMS Audio.
                </p>

            </div>
        </div>

    </div>
}
export default AboutSection;