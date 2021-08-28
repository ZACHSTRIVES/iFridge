import React from "react";
import '../loginPage.css'
import gitHubLogo from '../../../static/img/github.svg'
export interface SigninButtonProps {
   
};

const CLIENT_ID = "e126eae4113858542c6f";
const REDIRECT_URI = "http://localhost:3000/";

const SigninButton = () =>
    <div className="signinGithub">
        <a id="githubLink" href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}>
        <img src={gitHubLogo} alt="logo"></img>    
        Sign in with GitHub
        </a>
    </div>


export default SigninButton;