import React, {useEffect } from "react";
import './loginPage.css';
import logo from '../../static/img/logo.png'
import SigninButton from "./signInButton/signinButton";
import { useHistory, useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../api/mutations";


export interface Login_login_student {
  __typename: "Student";
  id: string;
  name: string;
  gitHub: string;
  imageURI: string;
}

export interface Login_login {
  __typename: "LoginPayload";
  student: Login_login_student;
  jwt: string;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  code: string;
}



function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const LoginBox = () => {


  const [login] = useMutation<Login>(LOGIN);
  const query = useQuery();
  const history = useHistory();

  useEffect(() => {
    const loginMethod = async () => {
      const code = query.get("code");
      if (code != null) {
        try {
          const { data } = await login({ variables: { code } });
          if (data != null) {
            localStorage.setItem("token", data.login.jwt)
            console.log(data)
          }
        } catch (e) {
          console.log(e);
        }
        history.push('/home');
      }
    };
    loginMethod();
  }, []);


  return (
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
  )
}




export default LoginBox;
