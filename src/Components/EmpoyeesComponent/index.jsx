import React, { useEffect, useState } from 'react';
import styles from './style.module.css';





const EmployeesComponent = ({ data }) => {
    const { id, img, username, position, workpractic, workday } = data


    // DATA URL IN EMPLOY CART COMPONENT

    return (
        <>
            <div className={`${styles.containerPerson}`}>
                <div className={`${styles.imageDiv}`}>
                    <img src={img} />
                </div>
                
                <div className={`${styles.titleBg}`}>
                    <h3 className={`${styles.titleText}`}>{username}</h3>
                    <p className={`${styles.firstP}`}>{position}</p>
                    <p className={`${styles.twoP}`}>{workpractic} <span className={`${styles.spanText}`}>{workday}</span></p>

                </div>
            </div>
        </>


    )
};

export default EmployeesComponent;