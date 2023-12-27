import React from 'react';
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer';
import PageInformation from '../../Components/PageInformation';
import { AiOutlineRight } from 'react-icons/ai'
import styles from './style.module.css';


const About = () => {
    return (
        <>
            <Header />
            <PageInformation
                h2Element={'HAQQIMIZDA'}
                firstP={'Əsas səhifə'}
                icon={<AiOutlineRight />}
                twoP={'Haqqımızda'}
                borderDiv={''} />
            <Footer />
        </>
    )
}

export default About