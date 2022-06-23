import { FC, useContext } from "react";
import OverlayContext from "../../context/OverlayContext";
import FormContainer from "../formContainer/FormContainer";
import IconButton from "../iconButton/IconButton";
import styles from './ContactOverlay.module.scss';
import closeIcon from '../../ui/icons/close.svg';

const ContactOverlay: FC = () => {
    const { isFormActive, setIsFormActive } = useContext(OverlayContext);
    const closeHandler = () => {
        setIsFormActive(false);
    }
    return <>
        <div className={`${styles.left} ${isFormActive ? styles.active : ''}`}></div>
        <div className={`${styles.right} ${isFormActive ? styles.active : ''}`}>
            <div className={styles.close}>
                <IconButton iconSrc={closeIcon} onClick={closeHandler} label="Zamknij" />
            </div>
            <FormContainer isFormActive={isFormActive} closeHandler={closeHandler}/>
        </div>
    </>
}

export default ContactOverlay;
