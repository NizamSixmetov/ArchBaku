import React from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi'
import Button from '../ButtonUniversal/Button';
import HomeTechnicComponent from '../HomeTechnicComponent';

const HomeTechnic = () => {
  return (
    <div className={`${styles.bgDiv}`}>
      <div className={`${styles.positionDiv}`}>
        <div className="container">
          <div className={`${styles.h2Title}`}>
            <h2>
              TEXNİKALAR
            </h2>
            <div className={`${styles.h2Bottom}`}></div>
          </div>
          <div className={`${styles.technicCardContainerDiv}`}>
            <div className={`${styles.childFlex}`}>
              <HomeTechnicComponent
                pElement={'Lorem ipsum dolor sit amet'}
                imgElement={'../../../public/Technic.svg'}
                link={'/servicesDetail'}
              />
              <HomeTechnicComponent
                pElement={'Lorem ipsum dolor sit amet'}
                imgElement={'../../../public/Technic.svg'}
                link={'/servicesDetail'}
              />
            </div>
            <div className={`${styles.childFlex}`}>
              <HomeTechnicComponent
                pElement={'Lorem ipsum dolor sit amet'}
                imgElement={'../../../public/Technic.svg'}
                link={'/servicesDetail'}
              />
              <HomeTechnicComponent
                pElement={'Lorem ipsum dolor sit amet'}
                imgElement={'../../../public/Technic.svg'}
                link={'/servicesDetail'}
              />

            </div>
          </div>
        </div>
        <div className={`${styles.linkBtn}`}>
          <Button buttonStyle={'transparentWhite'} text={'Hamısı'} link={'/services'} icon={<BiChevronRight />} />
        </div>
      </div>
    </div>
  )
}

export default HomeTechnic