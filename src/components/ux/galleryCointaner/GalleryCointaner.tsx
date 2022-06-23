import { FC } from "react";
import styles from './GalleryCointaner.module.scss';

import image1 from '../../../components/ui/images/gallery/gal1.jpg';
import image2 from '../../../components/ui/images/gallery/gal2.jpg';
import image3 from '../../../components/ui/images/gallery/gal3.jpg';
import image4 from '../../../components/ui/images/gallery/gal4.jpg';
import image5 from '../../../components/ui/images/gallery/gal5.jpg';
import image6 from '../../../components/ui/images/gallery/gal6.jpg';

import SingleGalleryImage from "./singleGalleryImage/SingleGalleryImage";

const GalleryCointaner: FC = () => {
    const galleryImages = [image1, image2, image3, image4, image5, image6]
    return <div className={styles.galleryCointaner}>
        {galleryImages.map((image, index) => <SingleGalleryImage key={index} imgSrc={image} />)}
    </div>
}

export default GalleryCointaner;