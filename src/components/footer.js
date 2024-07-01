import React, { useState } from 'react';


export default function Footer() {

    const [activeSection, setActiveSection] = useState(null);

    const openDropDown = (event) => {
        const drop = event.target.innerText;
        setActiveSection(drop === activeSection ? null : drop);
    };



    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='about-container'>
                    <div className='project-content'>
                        <h2 title='About' className={`__title ${activeSection === 'About' ? 'rotate' : ''}`} onClick={openDropDown}>About</h2>
                        <a id='item-about' href='/About' className={`__item ${activeSection === 'About' ? 'active' : ''}`} title='About Us'>About Us</a>
                        <a id='item-projects' href='/About' className={`__item ${activeSection === 'About' ? 'active' : ''}`} title='Projects'>Projects</a>
                    </div>
                    <div className='help-content' onClick={openDropDown}>
                        <h2 title='Help' className={`__title ${activeSection === 'Help' ? 'rotate' : ''}`}>Help</h2>
                        <a id='item-support'  href='/ContactUs' className={`__item ${activeSection === 'Help' ? 'active' : ''}`} title='Support'>Support</a>
                        <a id='item-contact' href='/ContactUs' className={`__item ${activeSection === 'Help' ? 'active' : ''}`} title='Contact Us'>Contact Us</a>

                    </div>
                </div>

                <div className='address-container'>
                    <h2 className='__title'>Address & Communication</h2>
                    <div className='address-container__items'>
                        <div className='address-container__item' title='Address'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="22.5" viewBox="0 0 576 512"><path fill="#B197FC" d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></svg>
                            <label>Address</label>
                        </div>
                        <div title='Huzurevleri Mahallesi No:528/1 Çukurova Adana' className='address-container__content'>
                            Huzurevleri Mahallesi No:528/1 Çukurova Adana
                        </div>
                    </div>
                    <div className='address-container__items'>
                        <div title='Phone' className='address-container__item'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#B197FC" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                            <label>Phone</label>
                        </div>
                        <div title='+90 507 123 45 67' className='address-container__content'>
                            +90 507 123 45 67
                        </div>
                    </div>
                    <div className='address-container__items'>
                        <div title='Email' className='address-container__item'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#B197FC" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                            <label>Email</label>
                        </div>
                        <div title='ismailcankocabas@gmail.com' className='address-container__content'>
                            ismailcankocabas@gmail.com
                        </div>
                    </div>
                </div>

                <div className='social-container'>
                    <h2 className='__title'>Social Media</h2>
                    <ul className='__social-items'>
                        <li className='__social-item'>
                            <a id="facebook" href="https://www.facebook.com" target='_blank' title='Facebook' className='__social-item-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="25" viewBox="0 0 448 512"><path fill="#B197FC" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" /></svg>
                            </a>
                        </li>

                        <li className='__social-item'>
                            <a id="instagram" href="https://www.instagram.com" target='_blank' title='İnstagram' className='__social-item-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="25" viewBox="0 0 448 512"><path fill="#B197FC" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg>
                            </a>
                        </li>

                        <li className='__social-item'>
                            <a id="youtube" href="https://www.youtube.com/" target='_blank' title='Youtube' className='__social-item-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="30" viewBox="0 0 576 512"><path fill="#B197FC" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>
                            </a>
                        </li>

                        <li className='__social-item'>
                            <a id="x-twitter" href="https://x.com" target='_blank' title='X-Twitter' className='__social-item-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="25" viewBox="0 0 448 512"><path fill="#B197FC" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" /></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='copyright-container'>
                <a href="https://www.instagram.com/ismailcankocabas/" target='_blank' title='İsmailCanKocabas' className='copyright-content'>
                    İsmailCanKocabaş, Inc © 2024
                </a>
            </div>

        </div>
    )
}
