import { FC } from "react";
import youtubeIcon from '../icons/yt.svg';
import twitterIcon from '../icons/twitter.svg';
import facebookIcon from '../icons/fb.svg';
import instagramIcon from '../icons/insta.svg';

import styles from './SocialLinks.module.scss';
import SingleSocialLink from "./singleSocialLink/SingleSocialLink";

const socialData = [
    {
        label: "YouTube",
        link: "https://www.youtube.com/channel/UC8zJedg1f4sKnyuHWeS6vyw",
        icon: youtubeIcon
    },
    {
        label: "Instagram",
        link: "https://www.instagram.com/50cent/",
        icon: instagramIcon
    },
    {
        label: "Facebook",
        link: "https://www.facebook.com/50cent",
        icon: facebookIcon
    },
    {
        label: "Twiteer",
        link: "https://twitter.com/50cent",
        icon: twitterIcon
    },
]

const SocialLinks: FC = () => {
    return <div className={styles.socialContainer}>
        {socialData.map(social => <SingleSocialLink key={social.label} {...social} />)}
    </div>
}
export default SocialLinks;