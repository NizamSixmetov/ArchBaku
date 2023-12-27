import React from 'react';
import styles from './style.module.css'
import { NavLink } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import Button from '../ButtonUniversal/Button';
import HomeProjectComponent from '../HomeProjectComponent';

const HomeProjects = () => {
    return (
        <div className={` ${styles.bgImage} `}>
            <div className={`${styles.positionDiv}`}>
                <div className={`container ${styles.mpDiv}`}>
                    <div className={`${styles.title}`}>
                        <div className={`${styles.titleDiv}`}>
                            <h2>LAYİHƏLƏR</h2>
                            <div className={`${styles.titleBottomBorder}`}></div>
                        </div>
                        <dir className={`${styles.buttonDiv}`}>
                            <Button
                                buttonStyle={'transparent'}
                                text={'Hamısı'} link={'/projects'}
                                icon={<BiChevronRight />}
                            />
                        </dir>
                    </div>
                    <div className={`${styles.projectCardContainer}`}>
                        <HomeProjectComponent
                            ProjectStyle={'homeProject'}
                            imgElement={'../../../public/Services1.svg'}
                            pElement={'Lorem ipsum dolor sit amet'}
                            buttonElement={'Ətraflı'}
                            icon={<BiChevronRight />}
                            link={'/projectsdetail'} />
                        <HomeProjectComponent
                            ProjectStyle={'homeProject'}
                            imgElement={'../../../public/Services2.svg'}
                            pElement={'Lorem ipsum dolor sit amet'}
                            buttonElement={'Ətraflı'}
                            icon={<BiChevronRight />}
                            link={'/projectsdetail'} />
                        <HomeProjectComponent
                            ProjectStyle={'homeProject'}
                            imgElement={'../../../public/Services3.svg'}
                            pElement={'Lorem ipsum dolor sit amet'}
                            buttonElement={'Ətraflı'}
                            icon={<BiChevronRight />}
                            link={'/projectsdetail'} />
                        <HomeProjectComponent
                            ProjectStyle={'homeProject'}
                            imgElement={'../../../public/Services4.svg'}
                            pElement={'Lorem ipsum dolor sit amet'}
                            buttonElement={'Ətraflı'}
                            icon={<BiChevronRight />}
                            link={'/projectsdetail'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProjects;