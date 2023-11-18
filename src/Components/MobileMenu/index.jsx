import React, { useState } from 'react';
import { MyRoutes } from '../../MyRoutes';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import styles from './styles.module.css';

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.mobile}>
            <button
                className="btn btn-light mobile-menu-button"
                type="button"
                onClick={toggleMenu}>
                <span className="navbar-toggler-icon"><FaBars /></span>
            </button>
            <div className={`mobile-menu ${styles.mobileMenu}`}>

                {isOpen && (
                    <div className="mobile-menu-content">
                        {
                            MyRoutes.map(({ id, path, element, title }) => {
                                return (
                                    <div className=' d-flex justify-content-start' key={id}>
                                        {/* <NavLink
                                        className={`pe-5 me-5 ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}
                                        path={path} element={element}>
                                        {title}
                                    </NavLink> */}
                                        {
                                            title && <NavLink
                                                className={`m-2 ${({ isActive }) => (isActive ? 'active' : 'inactive')}`}
                                                to={path}>
                                                {title}
                                            </NavLink>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileMenu;
