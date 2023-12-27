import { NavLink } from 'react-router-dom';
import styles from './style.module.css';
import { BiChevronRight } from 'react-icons/bi';

const HomeServiceComponent = ({ ServiceStyle, imgElement, h3Element, pElement, link, icon }) => {
    let universalService = '';
    switch (ServiceStyle) {
        case 'homeService':
            universalService = styles.universalServiceStyles
            icon = <BiChevronRight />
            break;
    }
    return (
        <div className={`${styles.flexDiv}`}>
            <img className={`${styles.imgElement}`} src={imgElement} alt="" />
            <h3 className={`${styles.h3Element}`}>{h3Element}</h3>
            <p className={`${styles.pElement}`}>{pElement}</p>
            <NavLink className={`${styles.aElement}`} to={link}>
                Ətraflı {icon}
            </NavLink>
        </div>
    )
};

export default HomeServiceComponent;