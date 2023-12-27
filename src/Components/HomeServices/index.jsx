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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeServices