import React from 'react';

const HeaderTopContact = ({ id, title, icon }) => {
    return (
        <div className=' d- d-flex align-items-center'>
            <p className='me-2 d-flex align-items-center'>
                {icon}
            </p>
                {title}
        </div>
    )
};

export default HeaderTopContact;