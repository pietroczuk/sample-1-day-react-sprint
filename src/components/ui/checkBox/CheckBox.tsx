import { FC } from "react";
import styles from './CheckBox.module.scss';

interface CheckBoxProps {
    label?: string,
    onClick: VoidFunction
}

const CheckBox: FC<CheckBoxProps> = ({ label, onClick }) => {
    return <div className={styles.contener} onClick={onClick}>
        <div className={styles.box}></div>
        {label && <div className={styles.label}>
            {label}
        </div>}
    </div>
}

export default CheckBox;