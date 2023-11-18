import { Link, NavLink } from "react-router-dom";
import styles from './style.module.css'

const SocialNetworkComponent = ({ networkStyle, imgElement, link }) => {
    let socialNetwork = ''
    switch (networkStyle) {
        case 'footer':
            socialNetwork = styles.footerSocialNetwork
            break;
    }
    return (
        <>
            <Link target="_blank" to={link}>
                <img className={`${styles.social}`} src={imgElement} alt="" />
            </Link>
        </>
    )
};

export default SocialNetworkComponent;