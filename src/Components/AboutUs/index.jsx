import React from 'react';
import styles from './styles.module.css';
import { BiChevronRight } from 'react-icons/bi';
import Button from '../ButtonUniversal/Button';
import HomeAboutComponent from '../HomeAboutComponent';

const AboutUs = () => {
    return (
        <>
            <img className={`${styles.imagepos}`} src="./AboutPosition.svg" alt="" />
            <div className="container">
                <div className={`${styles.containerChild}`}>
                    {/* <div className={`${styles.leftImage}`}>
                        <div className={`${styles.positionDivUp}`}></div>
                        <div className={`${styles.positionDivDown}`}></div>
                        <img src="./AboutUsImage.svg" alt="" />
                    </div>
                    <div className={`${styles.rightText}`}>
                        <h2>
                            HAQQIMIZDA
                        </h2>
                        <div className={`${styles.h2BottomLine}`}></div>
                        <p>
                            Archbaku MMC 25 sentyabr 2019 cu
                            ildən təcrübəli mütəxəssis heyəti
                            ilə xidmət göstərən tikinti şirkətidir.
                            İqtisadiyyatın ən önəmli sahələrindən
                            biri olan infrastruktur sektorunda
                            daim yeniliklərə, inkişafa önəm
                            vermişik.
                        </p>
                        <p>
                            Bizim ən önəmli missiyamız yüksək
                            keyfiyyətli tikinti və mühəndislik
                            təcrübəmizdən istifadə edərək ən son
                            texnikalarla müştərilərimizin
                            etimadını qazanmaqdır.
                        </p>
                        <Button buttonStyle={'brown'} text={'Ətraflı'} link={'/about'} icon={<BiChevronRight />} />
                    </div> */}
                    <div className={`${styles.displayFlex}`}>
                        <div>
                            <HomeAboutComponent className={`${styles.flexDiv}`}
                                AboutUsStyles={'homeAboutUs'}
                                imgElement={'../../../public/AboutUsImage.svg'}
                                topFrame={''}
                                bottomFrame={''}
                                h2Element={'HAQQIMIZDA'}
                                h2ElementLine={''}
                                firstP={'Archbaku MMC 25 sentyabr 2019 cu ildən təcrübəli mütəxəssis heyəti ilə xidmət göstərən tikinti şirkətidir. İqtisadiyyatın ən önəmli sahələrindən biri olan infrastruktur sektorunda daim yeniliklərə, inkişafa önəm vermişik.'}
                                twoP={'Bizim ən önəmli missiyamız yüksək keyfiyyətli tikinti və mühəndislik təcrübəmizdən istifadə edərək ən son texnikalarla müştərilərimizin etimadını qazanmaqdır.'} />

                        </div>
                        <div>
                            <Button buttonStyle={'brown'} text={'Ətraflı'} link={'/about'} icon={<BiChevronRight />} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default AboutUs