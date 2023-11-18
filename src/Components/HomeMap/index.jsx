import React from 'react';

const HomeMap = () => {
    return (
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.798968750424!2d49.85851047493754!3d40.413304055849565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d16c71aece9%3A0xc029f472d00bbac0!2sArch%20Project%20Azerbaijan!5e0!3m2!1sru!2saz!4v1699458328652!5m2!1sru!2saz"
                width="600"
                height="450"
                style={{ border: '0', height: '500px', width: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
};

export default HomeMap;