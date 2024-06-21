import React from "react";
import "./Login.css"
import LoginGoogle from "./LoginGoogle"
import LoginFacebook from "./LoginFacebook"
import LoginGithub from "./LoginGithub"


function Login() {
    return (
     <div className="pageLogin">
        <div className="logo">
        <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-black-17.png" 
            alt="Logo spotify" title="Spotify"/>
          <p className="title">Spotify</p>
          <br />
        </div>
        <hr />
        <p className="text">Login in make me</p>
        <LoginGoogle />
        <LoginFacebook />
        <LoginGithub />
     </div>
    );
  }
export default Login;