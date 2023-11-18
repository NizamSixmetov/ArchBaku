import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { AiOutlineRight } from 'react-icons/ai';

const PageInformation = ({ pageStyle, icon, h2Element, firstP, twoP, borderDiv }) => {
    let universalClass = '';
    switch (pageStyle) {
        case 'topCap':
            universalClass = styles.topCap
            icon = <AiOutlineRight />
            break;
    }
    return (
        <div className={`${styles.bgDiv}`}>
            <img src="../../../public/AboutPage/TopCapBg.svg" alt="" />
            <div className='container'>
                <div className={`${styles.flexBox}`}>
                    <div className={`${styles.topDiv}`}>
                        <div className={`${styles.borderAfter}`}>{borderDiv}</div>
                        <h2>
                            {h2Element}
                        </h2>
                    </div>
                    <div className={`${styles.bottomDiv}`}>
                        <Link className={`${styles.firstP}`}>{firstP}</Link>
                        {icon}
                        <Link className={`${styles.twoP}`}>{twoP}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PageInformation;