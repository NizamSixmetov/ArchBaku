import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

const HomeTechnicComponent = ({ technicStyle, imgElement, pElement, link}) => {
    let universalTechnic = '';
    switch (technicStyle) {
        case 'homeTechnic':
            universalTechnic = styles.universalTechnicStyle
            break;
    }
    return (
        <NavLink className={`${styles.flexDiv}`} to={link}>
            <img className={`${styles.imgElement}`} src={imgElement} alt="Image" />
            <p className={`${styles.pElement}`}>{pElement}</p>
        </NavLink>
    )
};

export default HomeTechnicComponent;