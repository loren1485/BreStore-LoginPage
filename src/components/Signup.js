import React from 'react'
import '../App.css'
import './Signup.css'

function SignUp() {
    return(
        <body className="signup">
            <div className="signup-container">
                <h6 className="login">LOGIN</h6>
                <h6 className="signup">SIGN UP</h6>
                <form action="/">
                    <label for="insert-email">First Name</label>
                    <input type="text" id="insert-email" name="email" placeholder="Email"></input>

                    <label for="insert-password">Last Name</label>
                    <input type="text" id="insert-password" name="password" placeholder="Password"></input>
                </form>
            </div>
        </body>
    )
}

export default SignUp