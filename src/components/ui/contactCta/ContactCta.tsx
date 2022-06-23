import { FC, useContext } from "react";
import OverlayContext from "../../context/OverlayContext";
import styles from './ContactCta.module.scss';

interface ContactCtaProps {
    className?: string;
}

const ContactCta: FC<ContactCtaProps> = ({ className }) => {
    const { setIsFormActive } = useContext(OverlayContext);
    const clickHandler = () => {
        setIsFormActive(true);
    }
    return <div className={`${styles.cta} ${className}`} onClick={clickHandler}>
        współpraca
    </div>
}

export default ContactCta;