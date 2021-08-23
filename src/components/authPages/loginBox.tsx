import React from "react";
import './loginPage.css';
import logo from '../../static/img/logo.png'
import SigninButton from "./signInButton/signinButton";

const LoginBox = () =>

  <section className="container flex">
    <div className="left-dev">
      <img
        className="logo"
        src={logo}
        alt="iFridge"
      />
    </div>
    <div>
      <h1>Let you know your refrigerator like the back of your hand!</h1>
      <SigninButton></SigninButton>
    </div>

  </section>



export default LoginBox;
