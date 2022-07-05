import React from 'react';
import img1 from '../../images/login-page-1.svg'
import img2 from '../../images/login-page-2.svg'
import img3 from '../../images/login-page-3.svg'
import img4 from '../../images/login-page-4.svg'

const IllustrationsForAuthPage = () => {
    return (
        <div style={{
            position: "absolute"
        }}>
            <img style={{
                position: 'relative',
                top: 256,
            }} src={img1} alt="img1"/>
            <img src={img2} alt="img1"/>
            <img src={img3} alt="img1"/>
            <img src={img4} alt="img1"/>
        </div>
    );
};

export {IllustrationsForAuthPage};
