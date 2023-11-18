import React from 'react';
import styles from './style.module.css';
import { Link, NavLink } from 'react-router-dom';
import SocialNetworkComponent from '../SocialNetworkComponent';
import FooterLink from '../FooterMapComponent';
import { AiFillCaretRight } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className={`${styles.bgDiv}`}>
            <div className={`${styles.positionDiv}`}>
                <div className={`container`}>
                    <div className={`${styles.flexDiv}`}>
                        <div className={`${styles.leftDiv}`}>
                            <Link to={'/'}>
                                <img className={`${styles.logoImg}`} src="../../../public/FooterImg/Logo/footerLogo.svg" alt="Logo" />
                            </Link>
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                                Non velit sem est ipsum leo
                                consequat ornare. Justo sit
                                lacus, risus dictum.
                            </p>
                            <div className={`${styles.socialFlexDiv}`}>
                            <SocialNetworkComponent
                                link={'https://www.facebook.com'}
                                networkStyle={'footer'}
                                imgElement={'../../../public/FooterImg/SocialLogo/Facebook.svg'} />
                            <SocialNetworkComponent
                                link={'https://www.instagram.com'}
                                networkStyle={'footer'}
                                imgElement={'../../../public/FooterImg/SocialLogo/instagram.svg'} />
                            <SocialNetworkComponent
                                link={'https://www.linkedin.com'}
                                networkStyle={'footer'}
                                imgElement={'../../../public/FooterImg/SocialLogo/linkedin.svg'} />
                            <SocialNetworkComponent
                                link={'https://www.whatsapp.com'}
                                networkStyle={'footer'}
                                imgElement={'../../../public/FooterImg/SocialLogo/whatsapp.svg'} />

                            </div>
                        </div>
                        <div className={`${styles.centerDiv}`}>
                            <div className={`${styles.titleDiv}`}>
                                <h2>
                                    Saytın xəritəsi
                                </h2>
                                <div className={`${styles.titleBottomBorder}`}></div>
                            </div>
                            <div className={`${styles.centerDivFlex2}`}>
                                <div className={`${styles.linkLeft}`}>
                                    <FooterLink
                                        linkStyle={'footerLink'}
                                        link={'/'}
                                        icon={<AiFillCaretRight />}
                                        title={'Əsas səhifə'} />
                                    <FooterLink
                                        linkStyle={'footerLink'}
                                        link={'/about'}
                                        icon={<AiFillCaretRight />}
                                        title={'Haqqımızda'} />
                                    <FooterLink
                                        linkStyle={'footerLink'}
                                        link={'/projects'}
                                        icon={<AiFillCaretRight />}
                                        title={'Layihələr'} />
                                    <FooterLink
                                        linkStyle={'footerLink'}
                                        link={'/services'}
                                        icon={<AiFillCaretRight />}
                                        title={'Xidmətlər'} />
                                </div>
                                <div className={`${styles.linkRight}`}>
                                    <FooterLink
                                        linkStyle={'footerLink'}
                                        link={'/job'}
                                        icon={<AiFillCaretRight />}
                                        title={'Vakansiyalar'} />
                                    <FooterLink
                                        linkStyle={'footerLink'}
                                        link={'/news'}
                                        icon={<AiFillCaretRight />}
                                        title={'Xəbərlər'} />
                                    <FooterLink
                                        linkStyle={'footerLink'}
                                        link={'/contact'}
                                        icon={<AiFillCaretRight />}
                                        title={'Əlaqə'} />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.rightDiv}`}>
                            <div className={`${styles.titleDiv2}`}>
                                <h2>
                                    Son layihələr
                                </h2>
                                <div className={`${styles.titleBottomBorder2}`}></div>
                            </div>
                            <NavLink to={'/projects'}>
                                <div className={`${styles.imageDivFlex}`}>
                                    <div className={`${styles.imageTop}`}>
                                        <img src="../../../public/FooterImg/FooterProjects/1.svg" alt="" />
                                        <img src="../../../public/FooterImg/FooterProjects/2.svg" alt="" />
                                        <img src="../../../public/FooterImg/FooterProjects/3.svg" alt="" />
                                        <img src="../../../public/FooterImg/FooterProjects/4.svg" alt="" />
                                    </div>
                                    <div className={`${styles.imageBottom}`}>
                                        <img src="../../../public/FooterImg/FooterProjects/5.svg" alt="" />
                                        <img src="../../../public/FooterImg/FooterProjects/6.svg" alt="" />
                                        <img src="../../../public/FooterImg/FooterProjects/7.svg" alt="" />
                                        <img src="../../../public/FooterImg/FooterProjects/8.svg" alt="" />
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className={`${styles.bottomBorder}`}></div>
                    <div className={`${styles.footerEndDiv}`}>
                        <p>© 2022 Archbaku.az. Müəllif hüquqları qorunur</p>
                        <p>Site by JEDAI</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;