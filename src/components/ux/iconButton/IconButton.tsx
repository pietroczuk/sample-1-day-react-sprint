import { FC, MouseEventHandler } from "react";
import styles from './IconButton.module.scss';

interface IconButtonProps {
    iconSrc: string;
    onClick: MouseEventHandler<HTMLDivElement>;
    label?: string;
}

const IconButton: FC<IconButtonProps> = ({ iconSrc, onClick, label }) => {
    return <div className={styles.container} onClick={onClick}>
        {label && <div className={styles.label}>{label}</div>}
        <div className={styles.imageCointaner}>
            <img src={iconSrc} alt={label ? label : "ikona"} width="100%" height="100%" />
        </div>
    </div>
}

export default IconButton;