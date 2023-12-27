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
                    <div className={`mobile-menu-content p-2`}>
                        {
                            MyRoutes.map(({ id, path, element, title }) => {
                                return (
                                    <div className={`d-flex justify-content-center`} key={id}>
                                        {
                                            title && <NavLink
                                                className={({ isActive }) => isActive ? `${styles.active}` : `${styles.inActive}`}
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
