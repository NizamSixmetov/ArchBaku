import MobileMenu from '../MobileMenu';
import React from 'react';
import styles from './styles.module.css';
import { Link, NavLink } from 'react-router-dom';
import { MyRoutes } from '../../MyRoutes';
import { TbPointFilled } from 'react-icons/tb'


const Navigation = () => {
    return (
        <div>
            <div className="container">
                <div className={`d-flex justify-content-between ${styles.child}`}>
                    <div className={styles.NavigationImage}>
                        <Link to='/' className={`logo ${styles.logo}`}>
                            <img src="./LogoNavigation.svg" alt="Logo" />
                        </Link>
                    </div>
                    <div className={`d-flex align-items-center ${styles.NavigationLink}`}>
                        {
                            MyRoutes.map(({ id, title, path }) => {
                                return (
                                    <div key={id}>
                                        <li className='d-none d-lg-flex me-2 align-items-center'>
                                            {
                                                title && <NavLink
                                                    className={` ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}
                                                    to={path}>
                                                        <p className={`d-flex align-items-center ${styles.hoverLink}`}>
                                                    <TbPointFilled /> {title}
                                                        </p>
                                                </NavLink>
                                            }
                                        </li>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="d-block d-lg-none">
                        {
                            <MobileMenu />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navigation;