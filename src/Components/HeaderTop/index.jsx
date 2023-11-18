import React from 'react';
import styles from './style.module.css';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLocation } from 'react-icons/io5';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import HeaderTopContact from '../HeaderTopContact';

const HeaderTop = () => {
    const contactInfo = [
        { id: 1, title: '+994 51 987 65 43', icon: <BsFillTelephonePlusFill /> },
        { id: 2, title: 'info@archbaku.az', icon: <AiOutlineMail /> },
        { id: 3, title: 'Bakı, Azərbaycan', icon: <IoLocation /> }
    ]
    return (
        <div className={`d-none d-md-block ${styles.headerTop}`}>
            <div className={`container ${styles.containerFlex}`}>
                <div className={styles.contactInfo}>
                    {
                        contactInfo.map((props) => {
                            return <HeaderTopContact key={props.id} {...props} />
                        })
                    }
                </div>
                <div className={` ${styles.social}`}>
                    <Link to='https://google.com'>
                        <FaFacebookF className='me-2' />
                        <BsInstagram className='me-2' />
                        <FaLinkedinIn className='me-2' />
                        <BsWhatsapp className='me-2' />
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default HeaderTop;