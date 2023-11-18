import { useState, useEffect } from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Button from '../ButtonUniversal/Button';
import { BiChevronRight } from 'react-icons/bi';

const URL = 'http://localhost:3000/news/';
const HomeNews = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(URL).then(({ data }) => {
            setData(data)
        })
    }, [])
    return (
        <>
            <div className={`${styles.bgDiv}`}>
                <div className={`${styles.positionDisv}`}>
                    <div className="container">
                        <div className={`${styles.h2Title}`}>
                            <h2>
                                XƏBƏRLƏR
                            </h2>
                            <div className={`${styles.h2BottomBorder}`}></div>
                        </div>
                        <div className={`${styles.dataContainerFlex}`}>
                            <div className={`${styles.dataContainer}`}>
                                <div className={`${styles.dataCard}`}>
                                    {
                                        data.map(({ id, img, title, date, description, button, icon, icon2 }) => {
                                            return <div className={`${styles.addFit}`} key={id}>
                                                <img className={`${styles.firstImg}`} src={img} alt="" />
                                                <p className={` d-flex align-items-center ${styles.date}`}> <img src={icon} alt="" /> {date}</p>
                                                <h3 className={`${styles.title}`}>{title}</h3>
                                                <p className={`${styles.description}`}>{description}</p>
                                                <NavLink className={`d-flex align-items-center${styles.button}`} to='/newsDetail'>
                                                    {button} <img src={icon2} alt="" />
                                                </NavLink>
                                            </div>
                                        })
                                    }
                                </div>
                                <Button buttonStyle={'brown'}
                                    link={'/news'}
                                    text={'Hamısı'}
                                    icon={<BiChevronRight />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeNews