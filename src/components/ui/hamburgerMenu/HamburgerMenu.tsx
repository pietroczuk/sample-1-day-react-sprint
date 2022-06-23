import { FC } from "react";
import styles from './HamburgerMenu.module.scss';
import hamburgerIcon from '../icons/menu.svg';
import closeWhiteIcon from '../icons/closeWhite.svg';

interface HamburgerMenuProps {
    isOpen: boolean;
    onClick: VoidFunction
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ isOpen, onClick }) => {
    return <div className={styles.hamburger} onClick={onClick}>
        <img src={isOpen ? closeWhiteIcon : hamburgerIcon} alt="menu" width="100%" height="100%" />
    </div>
}

export default HamburgerMenu;