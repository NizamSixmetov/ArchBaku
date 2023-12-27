import React from 'react';
import styles from './styles.module.css';
import Button from "../ButtonUniversal/Button";

const AboutUs = () => {
  return (
    <div className={`${styles.bgDiv}`}>
      <div className="container">
        <div className={`${styles.flexDiv}`}>
          <div className={`${styles.leftDiv}`}>
            <img src="../../../public/AboutUsImage.svg" alt="Image" />
          </div>
          <div className={`${styles.rightDiv}`}>
            <div className={`${styles.h2Div}`}>
              <h2>HAQQIMIZDA</h2>
              <div className={`${styles.h2LineDiv}`}></div>
            </div>
            <div className={`${styles.pDiv}`}>
              <p>Archbaku MMC 25 sentyabr 2019 cu
                ildən təcrübəli mütəxəssis heyəti ilə
                xidmət göstərən tikinti şirkətidir.
                İqtisadiyyatın ən önəmli sahələrindən
                biri olan infrastruktur sektorunda
                daim yeniliklərə, inkişafa önəm
                vermişik.
              </p>
            </div>
            <div className={`${styles.pDiv}`}>
              <p>Bizim ən önəmli missiyamız
                yüksək keyfiyyətli tikinti və
                mühəndislik təcrübəmizdən
                istifadə edərək ən son
                texnikalarla müştərilərimizin
                etimadını qazanmaqdır.
              </p>
            </div>
            <div className={`${styles.buttonDiv}`}>
              <Button
                buttonStyle={'brown'}
                text={'Ətraflı'}
                link={'/about'}
              />
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}

export default AboutUs