import styles from './style.module.css';

const HomeAboutComponent = ({ AboutUsStyles, h2Element, h2ElementLine, firstP, twoP, imgElement, topFrame, bottomFrame }) => {
    let universalAboutUs = '';
    switch (AboutUsStyles) {
        case 'homeAboutUs':
            universalAboutUs = styles.universalAbout
            break;
        case 'AboutPage':
            universalAboutUs = styles.universalAboutUsUs
            firstP
            twoP
            imgElement
            topFrame
            bottomFrame
    }
    return (
        <div className={`${styles.flexDiv}`}>
            <div className={`${styles.leftDiv}`}>
                <img src={imgElement} alt="img" />
                <div className={`${styles.topFrame}`}>{topFrame}</div>
                <div className={`${styles.bottomFrame}`}>{bottomFrame}</div>
            </div>
            <div className={`${styles.rightDiv}`}>
                <h2 className={`${styles.h2Element}`}>{h2Element}</h2>
                <div className={h2ElementLine === undefined ? "" : styles.h2ElementLine}>
                    {h2ElementLine}
                </div>
                <p className={`${styles.firstP}`}>{firstP}</p>
                <p className={`${styles.twoP}`}>{twoP}</p>
            </div>
        </div>
    )
};

export default HomeAboutComponent;