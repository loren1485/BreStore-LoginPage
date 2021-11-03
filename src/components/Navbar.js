import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import './Signup.css'

function Navbar() {
    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img alt="" className="logo" />
                    <i class='brestore-logo' />
                </Link>
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link to="/home" className="nav-links">
                            HOME
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shop" className="nav-links">
                            SHOP
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/language" className="nav-links" className="langbtn">
                            ENGLISH
                            <div class="language-dropdown-content">
                                <a href="#">ENGLISH</a>
                                <a href="#">PORTUGUESE</a>
                                <a href="#">SPANISH</a>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        
        
        <body className="signup-background">
                <div className="background-right">.</div>
                <div className="signup-container">
                    <div className="login-signup">
                    <h3 className="login">LOGIN</h3>
                    <h3 className="signup">SIGN UP</h3>
                    </div>
                    <form action="/" className="signup-form">
                        <label for="insert-email"></label>
                        <input type="text" className="insert-email" name="email" placeholder="Email"></input>

                        <label for="insert-password"></label>
                        <input type="text" className="insert-password" name="password" placeholder="Password"></input>
                    </form>
                    <button className="signup-btn">
                        LOGIN
                    </button>
                    <div className="signup-or-sns">
                        <h3 className="signup-question">Forgot Your Password?</h3>
                        <h4 className="signup-or">Or</h4>
                        <ul className="signup-sns">
                            <li className="signup-sns-item">
                                <Link to="/facebook" className="sns-facebook">.
                                </Link>
                            </li>
                            <li className="signup-sns-item">
                                <Link to="/google" className="sns-google">.
                                </Link>
                            </li>
                            <li className="signup-sns-item">
                                <Link to="/twitter" className="sns-twitter">.
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </body>
            </>
    )
}

export default Navbar