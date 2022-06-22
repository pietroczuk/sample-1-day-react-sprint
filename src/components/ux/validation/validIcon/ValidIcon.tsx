import { FC } from "react";
import valid from '../../../ui/icons/valid.svg';
import invalid from '../../../ui/icons/invalid.svg';
import styles from './ValidIcon.module.scss';

interface ValidIconProps {
    isValid: boolean,
    isHiding? : boolean,
}

const ValidIcon: FC<ValidIconProps> = ({ isValid, isHiding }) => {
    if(isHiding) {
        return <></>
    }
    return <div className={styles.iconCointaner}>
        <img width="100%" height="100%" src={isValid ? valid : invalid} alt={isValid ? "poprawne" : "niepoprawne"} />
    </div>
}

export default ValidIcon;