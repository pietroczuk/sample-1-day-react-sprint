import { FC } from "react";
import styles from './CheckBox.module.scss';
import validIcon from '../../ui/icons/valid.svg';

interface CheckBoxProps {
    label?: string,
    onClick: VoidFunction,
    forceChecked?: boolean;
    checked?: boolean;
}

const CheckBox: FC<CheckBoxProps> = ({ label, onClick, forceChecked, checked }) => {
    const onClickHandler = () => {
        !forceChecked && onClick();
    }
    return <div className={styles.contener} onClick={onClickHandler}>
        <div className={styles.box}>
            {(forceChecked || checked) && <img src={validIcon} width="100%" height="100%" alt="zaznaczono" />}
        </div>
        {label && <div className={styles.label}>
            {label}
        </div>}
    </div>
}

export default CheckBox;