import { FC, useContext } from "react";
import OverlayContext from "../../context/OverlayContext";
import styles from './ContactCta.module.scss';

const ContactCta: FC = () => {
    const { setIsFormActive } = useContext(OverlayContext);
    const clickHandler = () => {
        setIsFormActive(true);
    }
    return <div className={styles.cta} onClick={clickHandler}>
        współpraca
    </div>
}

export default ContactCta;