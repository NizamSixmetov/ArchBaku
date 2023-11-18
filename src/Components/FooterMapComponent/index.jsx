import { AiFillCaretRight } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom';
import styles from './style.module.css'

const FooterLink = ({ linkStyle, icon, link, title }) => {
    let universalLink = '';
    switch (linkStyle) {
        case 'footerLink':
            universalLink = styles.LinkStyles
            icon = <AiFillCaretRight />
    }

    return (
        <Link className={` d-flex align-items-center ${styles.LinkA}`} to={link}>
            {icon}{title}
        </Link>
    )
};

export default FooterLink;