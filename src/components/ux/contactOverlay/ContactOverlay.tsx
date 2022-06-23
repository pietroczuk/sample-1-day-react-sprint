import { FC, useContext } from "react";
import OverlayContext from "../../context/OverlayContext";
import FormContainer from "../formContainer/FormContainer";
import styles from './ContactOverlay.module.scss';

const ContactOverlay: FC = () => {
    const { isFormActive, setIsFormActive } = useContext(OverlayContext);
    const closeHandler = () => {
        setIsFormActive(false);
    }
    return <>
        <div className={`${styles.left} ${isFormActive ? styles.active : ''}`}></div>
        <div className={`${styles.right} ${isFormActive ? styles.active : ''}`}>
            <button className={styles.close} onClick={closeHandler}>X close</button>
            <FormContainer isFormActive={isFormActive} />
        </div>
    </>
}

export default ContactOverlay;
