import { FC } from "react";
import styles from './SingleSocialLink.module.scss';

interface SingleSocialLinkProps {
    label: string
    link: string
    icon: string
}

const SingleSocialLink: FC<SingleSocialLinkProps> = ({ icon, link, label }) => {
    return <div className={styles.singleSocial}>
        <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
            <img src={icon} alt={label} width="100%" height="100%" />
            <div className={styles.label}>{label}</div>
        </a>
    </div>
}

export default SingleSocialLink;