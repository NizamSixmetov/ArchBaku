import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import EmployeesComponent from '../EmpoyeesComponent/index';
import axios from 'axios';

const URL = 'http://localhost:3000/employees';


const Empoyees = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(URL).then(({ data }) => {
            setData(data);
        })
    }, [])
    //  SECTION COMPONENT
    return (
        <div className={`${styles.bgDiv}`}>
            <img className={`${styles.firstImage}`} src="../../../public/Employees/backgroundImage/left.svg" alt="" />
            <img className={`${styles.twoDiv}`} src="../../../public/Employees/backgroundImage/right.svg" alt="" />
            <div className={`${styles.positionDiv}`}>
                <div className="container">
                    <div className={`${styles.titleDiv}`}>
                        <h2>
                            ƏMƏKDAŞLAR
                        </h2>
                        <div className={`${styles.titleBottomBorder}`}></div>
                    </div>
                    <div className={`${styles.containerPerson}`}>
                        {data.map((worker) => <EmployeesComponent key={worker.id} data={worker} />)}
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Empoyees;


