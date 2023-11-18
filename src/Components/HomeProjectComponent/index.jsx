import { NavLink } from 'react-router-dom';
import styles from './style.module.css';
import { BiChevronRight } from 'react-icons/bi';

const HomeProjectComponent = ({ ProjectStyle, imgElement, pElement, buttonElement, icon, link }) => {
    let universalProject = '';
    switch (ProjectStyle) {
        case 'homeProject':
            universalProject = styles.universalProjectStyle
            icon = <BiChevronRight />
            break;
    }
    return (
        <div className={`${styles.projectContainer}`}>
            <div className={`${styles.projectCard}`}>
                <div className={`${styles.imageDiv}`}>
                    <img src={imgElement} alt="image" className={`${styles.image}`} />
                </div>
                <div className={`${styles.elementDiv}`}>
                    <p className={`${styles.pElement}`}>{pElement}</p>
                </div>
                <div className={`${styles.overlay}`}>
                    <div className={`${styles.text}`}>
                        <NavLink to={link} className={`${styles.buttonElement}`}>{buttonElement}{icon}</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeProjectComponent;