import { FC, useState } from "react";
import FormContainer from "../formContainer/FormContainer";
import styles from './ContactOverlay.module.scss';

const ContactOverlay: FC = () => {
    const [isActive, setIsActive] = useState(false);

    const setIsActiveHandler = () => {
        setIsActive(prevState => !prevState);
    }
    
    return <div className={`${styles.overlay} ${isActive ? styles.active: ''}`}>
        <button className={styles.button} onClick={setIsActiveHandler}>show / hide</button>
        <div className={styles.left}></div>
        <div className={styles.right}>
            <FormContainer />
        </div>
    </div>
}

export default ContactOverlay;
