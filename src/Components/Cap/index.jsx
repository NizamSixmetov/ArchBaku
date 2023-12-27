import React from 'react';
import styles from './styles.module.css';
import Button from '../ButtonUniversal/Button';
import { BiChevronRight } from 'react-icons/bi';

const Cap = () => {
    return (
        <div className={`mt-2 ${styles.firstContainer}`}>
            <div className='container'>
                <div className={`${styles.capContainer}`}>
                    <h1>
                        LOREM IPSUM DOLOR SIT
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Non velit sem est ipsum<br />
                        leo consequat ornare. Justo sit lacus,
                        risus dictum. Nisi, quis orci viverra at
                        quam<br /> porttitor et. Eu cras imperdiet nisl,
                        feugiat lectus mi.
                    </p>
                    <div className={`${styles.buttonMP}`}>
                        <Button buttonStyle={'transparent'} text={'Ətraflı'} link={'/services'} icon={<BiChevronRight />} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cap;