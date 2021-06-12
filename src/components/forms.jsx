import React from 'react'
import "./sign_up_login.css"
import {login, signUp} from "./sign_up_login.js";

export const Login = () => {
    return (
        <div>
            <form className= "login" method="POST" action="#" onSubmit={login}>
                <input type="email" name="email_address_login" placeholder="E-mail Address" required></input>
                <br></br>
                <input type="password" name="password_login" placeholder="Password" required></input>
                <br></br>
                <button type="submit" className="outline-secondary">Login</button>
                <br></br>
                <p id="login_error"></p>
			</form>
        </div>
    )
}

export const SignUp = () => {
    return (
        <div>
			<form className= "sign_up" method="POST" action="#" onSubmit={signUp}>
                <input type="email" name="email_address_sign_up" placeholder="E-mail Address" required></input>
                <br></br>
                <input type="text" name="user_name" placeholder="Name" required></input>
                <br></br>
                <input type="text" name="user_surname" placeholder="Surname" required></input>
                <br></br>
                <input type="password" name="password_sign_up" placeholder="Password" required></input>
                <br></br>
                <button type="submit" className="outline-secondary">Sign Up</button>
                <br></br>
                <p id="sign_up_error"></p>
			</form>
        </div>
    )
}
