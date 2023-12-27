import React from 'react';
import styles from './style.module.css';
import ContactComponent from '../ContactComponent';
import Button from '../ButtonUniversal/Button';
import {BiChevronRight} from 'react-icons/bi'

const ContactHome = () => {
    return (
        <div className={`${styles.bgDiv}`}>
            <div className={`${styles.positionDiv}`}></div>
            <div className="container">
                <div className={`${styles.titleH2}`}>
                    <h2>
                        Əlaqə
                    </h2>
                    <div className={`${styles.h2BottomLine}`}></div>
                </div>
                <div className={`${styles.flexDiv}`}>
                    <div className={`${styles.componentDiv}`}>
                        <ContactComponent
                            contactStyle='HomePage'
                            h3Element={'Telefon'}
                            pElement={'+994 51 987 65 43'}
                            imgElement='../../../public/HomeContact/Icons/Telephone.svg' />
                        <ContactComponent
                            contactStyle='HomePage'
                            h3Element={'Email'}
                            pElement={'info@archbaku.az'}
                            imgElement='../../../public/HomeContact/Icons/Message.svg' />
                        <ContactComponent
                            contactStyle='HomePage'
                            h3Element={'Ünvan'}
                            pElement={'Bakı, Azərbaycan'}
                            imgElement='../../../public/HomeContact/Icons/Location.svg' />
                    </div>
                    <div className={`${styles.rightDiv}`}>
                        <h4>
                            Suallarınız var?
                        </h4>
                        <div className={`${styles.inpTextDiv}`}>
                            <div className={`${styles.inputDiv}`}>
                                <input type="text" placeholder='Adınız və Soyadınız' />
                                <input type="text" placeholder='Email ünvanı' />
                                <input type="text" name="" id="" placeholder='Telefon nömrəsi' />
                            </div>
                            <div className={`${styles.textAreaDiv}`}>
                                <textarea name="" id="" cols="25" rows="5" placeholder='Mesajınız'></textarea>
                                <Button
                                buttonStyle={'brown'}
                                link={'/about'}
                                text={'Göndər'}
                                icon={<BiChevronRight/>}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactHome;