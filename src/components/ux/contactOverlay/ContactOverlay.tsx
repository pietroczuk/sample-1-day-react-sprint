import { FC, useContext } from "react";
import OverlayContext from "../../context/OverlayContext";
import FormContainer from "../formContainer/FormContainer";
import styles from './ContactOverlay.module.scss';

const ContactOverlay: FC = () => {
    const { isFormActive, setIsFormActive } = useContext(OverlayContext);

    const setIsActiveHandler = () => {
        setIsFormActive(!isFormActive);
    }

    return <div className={`${styles.overlay} ${isFormActive ? styles.active : ''}`}>
        <button className={styles.button} onClick={setIsActiveHandler}>show / hide</button>
        <div className={styles.left}></div>
        <div className={styles.right}>
            <FormContainer />
        </div>
    </div>
}

export default ContactOverlay;
