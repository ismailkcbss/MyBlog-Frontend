import React from 'react'

export default function Navbar() {
    return (
        <div style={{height:"2000px"}}>
            <div className="navbar">
                <nav className='navbar-content'>
                    <div title="MyBlog" className="navbar-brand">
                        My Blog
                    </div>
                    <div className="navbar-menu">
                        <ul className="navbar-items">
                            <li className="navbar-item">
                                <a title="Home" className='navbar-link' href="/">Home</a>
                            </li>
                            <li className="navbar-item">
                                <a title="About" className='navbar-link' href="/about">About</a>
                            </li>
                            <li className="navbar-item">
                                <a title="Contact" className='navbar-link' href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className='navbar-login'>
                    <a title="Login" className='navbar-login-link' href='/Login'>Login</a>
                </div>
            </div>

            <div className='navbar-toggle'>
                <button title='Menu' className='navbar-toggle-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path fill="#6589ad" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                </button>
                <div className='navbar-toggle-menu'>
                        <ul className="navbar-toggle-items">
                            <li className="navbar-toggle-item">
                                <a title="Home" className='navbar-toggle-link' href="/">Home</a>
                            </li>
                            <li className="navbar-toggle-item">
                                <a title="About" className='navbar-toggle-link' href="/about">About</a>
                            </li>
                            <li className="navbar-toggle-item">
                                <a title="Contact" className='navbar-toggle-link' href="/contact">Contact</a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>

    )
}
