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
            
            {/* Existing copyright */}
            <p className="footer__copy__text">
                #blueprintstrategies {year}
            </p>

            {/* New policy links */}
            <p className="footer__copy__text" style={{ marginTop: '8px', fontSize: '14px' }}>
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> |{" "}
                <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            </p>
        </div>
    )
}

export default Footer;
