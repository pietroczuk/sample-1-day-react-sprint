import { FC } from "react";
import styles from './SingleGalleryImage.module.scss';

interface SingleGalleryImageProps {
    imgSrc: string;
}

const SingleGalleryImage: FC<SingleGalleryImageProps> = ({ imgSrc }) => {
    return <div className={styles.singleImageCointaner}>
        <img src={imgSrc} alt="50 cent" width="100%" height="100%" />
    </div>
}

export default SingleGalleryImage;