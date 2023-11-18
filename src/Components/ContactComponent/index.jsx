import styles from './style.module.css';

const ContactComponent = ({ contactStyle, h3Element, pElement, imgElement }) => {
    let universalContact = ''
    switch (contactStyle) {
        case 'homePage':
            universalContact = styles.homePageComponent
            break;
    }
    return (
        <div className={`${styles.flexDiv}`}>
            <div className={`${styles.imageDiv}`}>
                <img src={imgElement} alt="" />
            </div>
            <div className={`${styles.textDiv}`}>
                <h3 className={`${styles.h3Element}`}>
                    {h3Element}
                </h3>
                <p className={`${styles.pElement}`}>
                    {pElement}
                </p>
            </div>
        </div>
    )
};

export default ContactComponent;