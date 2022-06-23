import { FC } from "react";
import styles from './SingleGalleryImage.module.scss';

interface SingleGalleryImageProps {
    imgSrc: string;
}

const SingleGalleryImage: FC<SingleGalleryImageProps> = ({ imgSrc }) => {
    return <div className={styles.singleImageCointaner}
        style={{ background: `url(${imgSrc}) no-repeat center center #000`, backgroundSize: "cover" }}
    >
    </div>
}

export default SingleGalleryImage;