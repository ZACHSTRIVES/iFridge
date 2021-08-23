import React from "react";
import '../loginPage.css'
import gitHubLogo from '../../../static/img/github.svg'


const SigninButton = () =>
    <div className="signinGithub">
        <img src={gitHubLogo} alt="logo"></img>
        Sign in with GitHub
    </div>


export default SigninButton;