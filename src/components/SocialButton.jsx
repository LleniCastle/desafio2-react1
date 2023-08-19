//boton de las redes sociales, exportado hacia registro. 1p
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Icons = ({ icon }) => {
    const socialIcons = {
        'fa-linkedin-in': faLinkedinIn,
        'fa-github':faGithub,
        'fa-facebook': faFacebook,
    };

    return (
        <> 
            <FontAwesomeIcon icon={socialIcons[icon]} /> 
        </> 
    )
};



export default Icons;
