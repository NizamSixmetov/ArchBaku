import React from 'react';
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer';
import PageInformation from '../../Components/PageInformation';
import { AiOutlineRight } from 'react-icons/ai'
import HomeAboutComponent from '../../Components/HomeAboutComponent';
import EmployeesComponent from '../../Components/EmpoyeesComponent';
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
            <div className={`${styles.positionDiv}`}>
                <div className={`${styles.bgDiv}`}>
                    <img src="../../../public/AboutPosition.svg" alt="" />
                    <div className={`container ${styles.contentDiv}`}>
                        <div className='mt-5 mb-5'>
                            <HomeAboutComponent
                                AboutUsStyles={'AboutPage'}
                                imgElement={'../../../public/AboutUsImage.svg'}
                                topFrame={''}
                                bottomFrame={''}
                                // h2Element={''}
                                // h2ElementLine={''}
                                firstP={'Archbaku MMC 25 sentyabr 2019 cu ildən təcrübəli mütəxəssis heyəti ilə xidmət göstərən tikinti şirkətidir. İqtisadiyyatın ən önəmli sahələrindən biri olan infrastruktur sektorunda daim yeniliklərə, inkişafa önəm vermişik.'}
                                twoP={' Bizim ən önəmli missiyamız yüksək keyfiyyətli tikinti və mühəndislik təcrübəmizdən istifadə edərək ən son texnikalarla müştərilərimizin etimadını qazanmaqdır.'} />
                        </div>
                        <div className='mt-5 mb-5'>
                            <HomeAboutComponent
                                imgElement={'../../../public/AboutPage/image2.svg'}
                                topFrame={''}
                                bottomFrame={''}
                                firstP={'Yüksək keyfiyyətli texnikalarımız sayəsində layihələrimizi vaxtında təhvil veririk. Xidmətlərimizə təmir, tikinti, qədim binaların bərpası, landşaft dizayn memarlıq, yeni tikililərin inşası daxildir.'}
                                twoP={'Bizim əsas üstünlüyümüz müxtəlif həcmdəki layihələrdə çoxillik təcrübəyə malik olan ixtisaslaşmış peşəkar komandamızdır.'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About