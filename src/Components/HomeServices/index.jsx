import React from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import HomeServiceComponent from '../HomeServiceComponent';

const HomeServices = () => {
    return (
        <div className={`${styles.bgDiv}`}>
            <div className={`${styles.positionDiv}`}>
                <div className="container">
                    <div>
                        <h2>
                            XİDMƏTLƏR
                        </h2>
                        <div className={`${styles.h2Bottom}`}></div>
                    </div>
                    <div className={`${styles.servicesCardContainer}`}>
                        <HomeServiceComponent
                            ServiceStyle={'homeService'}
                            imgElement={'../../../public/ServicesConstruction.svg'}
                            h3Element={'Tikinti'}
                            link={'/servicesDetail'}
                            pElement={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.'}
                        />
                        <HomeServiceComponent
                            ServiceStyle={'homeService'}
                            imgElement={'../../../public/ServicesConstruction2.svg'}
                            h3Element={'Restavrasiya'}
                            link={'/servicesDetail'}
                            pElement={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.'}
                        />
                        <HomeServiceComponent
                            ServiceStyle={'homeService'}
                            imgElement={'../../../public/ServicesConstruction3.svg'}
                            h3Element={'Layihələndirmə'}
                            link={'/servicesDetail'}
                            pElement={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.'}
                        />
                        <HomeServiceComponent
                            ServiceStyle={'homeService'}
                            imgElement={'../../../public/ServicesConstruction4.svg'}
                            h3Element={'Texnikanın icarəsi'}
                            link={'/servicesDetail'}
                            pElement={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.'}
                        />
                                                <HomeServiceComponent
                        ServiceStyle={'homeService'}
                        imgElement={'../../../public/ServicesConstruction5.svg'}
                        h3Element={'Təmir'}
                        link={'/servicesDetail'}
                        pElement={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.'}
                        />
                                                <HomeServiceComponent
                        ServiceStyle={'homeService'}
                        imgElement={'../../../public/ServicesConstruction6.svg'}
                        h3Element={'Eksteryer və Landşaft dizaynı'}
                        link={'/servicesDetail'}
                        pElement={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.'}
                        />
                        {/* <div className={`${styles.servicesCard}`}>
                            <img src="./ServicesConstruction.svg" alt="" />
                            <h3>Tikinti</h3>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Id sem mattis pulvinar lacus.
                                Viverra erat aenean orci
                                tristique
                                pellentesque iaculis aliquam.
                                Malesuada ornare nisi, sit id
                                eget elit ullamcorper.
                            </p>
                            <NavLink to='/services' className={`d-flex align-items-center ${styles.link}`}>
                                Ətraflı <BiChevronRight />
                            </NavLink>
                        </div> */}
                        {/* <div className={`${styles.servicesCard}`}>
                            <img src="./ServicesConstruction2.svg" alt="" />
                            <h3>Restavrasiya</h3>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Id sem mattis pulvinar lacus.
                                Viverra erat aenean orci
                                tristique
                                pellentesque iaculis aliquam.
                                Malesuada ornare nisi, sit id
                                eget elit ullamcorper.
                            </p>
                            <NavLink to='/services' className={`d-flex align-items-center ${styles.link}`}>
                                Ətraflı <BiChevronRight />
                            </NavLink>
                        </div> */}
                        {/* <div className={`${styles.servicesCard}`}>
                            <img src="./ServicesConstruction3.svg" alt="" />
                            <h3>Layihələndirmə</h3>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Id sem mattis pulvinar lacus.
                                Viverra erat aenean orci
                                tristique
                                pellentesque iaculis aliquam.
                                Malesuada ornare nisi, sit id
                                eget elit ullamcorper.
                            </p>
                            <NavLink to='/services' className={`d-flex align-items-center ${styles.link}`}>
                                Ətraflı <BiChevronRight />
                            </NavLink>
                        </div> */}
                        {/* <div className={`${styles.servicesCard}`}>
                            <img src="./ServicesConstruction4.svg" alt="" />
                            <h3>Texnikanın icarəsi</h3>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Id sem mattis pulvinar lacus.
                                Viverra erat aenean orci
                                tristique
                                pellentesque iaculis aliquam.
                                Malesuada ornare nisi, sit id
                                eget elit ullamcorper.
                            </p>
                            <NavLink to='/services' className={`d-flex align-items-center ${styles.link}`}>
                                Ətraflı <BiChevronRight />
                            </NavLink>
                        </div> */}
                        {/* <div className={`${styles.servicesCard}`}>
                            <img src="./ServicesConstruction5.svg" alt="" />
                            <h3>Təmir</h3>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Id sem mattis pulvinar lacus.
                                Viverra erat aenean orci
                                tristique
                                pellentesque iaculis aliquam.
                                Malesuada ornare nisi, sit id
                                eget elit ullamcorper.
                            </p>
                            <NavLink to='/services' className={`d-flex align-items-center ${styles.link}`}>
                                Ətraflı <BiChevronRight />
                            </NavLink>
                        </div> */}
                        {/* <div className={`${styles.servicesCard}`}>
                            <img src="./ServicesConstruction6.svg" alt="" />
                            <h3>Eksteryer və Landşaft dizaynı</h3>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Id sem mattis pulvinar lacus.
                                Viverra erat aenean orci
                                tristique
                                pellentesque iaculis aliquam.
                                Malesuada ornare nisi, sit id
                                eget elit ullamcorper.
                            </p>
                            <NavLink to='/services' className={`d-flex align-items-center ${styles.link}`}>
                                Ətraflı <BiChevronRight />
                            </NavLink>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeServices