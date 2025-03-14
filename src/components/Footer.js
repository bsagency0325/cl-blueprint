import React from 'react';

import iconFooter01 from '../images/icon-footer-01.png';
import iconFooter02 from '../images/icon-footer-02.png';
import iconFooter03 from '../images/icon-footer-03.png';

const Footer = () => {
    
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer__copy">
            <ul className="footer__list">
                <li className='footer__list__item'>
                    <img src={iconFooter01} alt="icon" className="footer__list__icon"/>
                    <span className="footer__list__text">Industry Specialists</span>
                </li>
                <li className='footer__list__item'>
                    <img src={iconFooter02} alt="icon" className="footer__list__icon"/>
                    <span className="footer__list__text">Guaranteed Results</span>
                </li>
                <li className='footer__list__item'>
                    <img src={iconFooter03} alt="icon" className="footer__list__icon"/>
                    <span className="footer__list__text">Qualified Leads</span>
                </li>
            </ul>
            <p className="footer__copy__text">
                #bluesprintstrategies {year}
            </p>
        </div>
    )
}

export default Footer;