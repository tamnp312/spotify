import React  from "react";
import {useNavigate} from 'react-router-dom'
import FacebookLogin from 'react-facebook-login'
import "./LoginFacebook.css"
import { FaFacebook } from "react-icons/fa"

function LoginFacebook() {
    
    const navigate = useNavigate();
    const responseFacebook = (response) => {
      navigate('/player')
      console.log (" đã đanwg nhập thành công ")
    }
    return (
      <div >
        <FacebookLogin
          appId="254946680343903"
          size="medium"
          // cssClass="facebook"
          fields="name,email,picture"
          // onClick={responseFacebook}
          callback={responseFacebook}
          // icon="icon fa-facebook"
          textButton={
        <>
          <FaFacebook /> Login with Facebook
        </>
      }
          cssClass="facebook-button"
        />
      </div>
    );  
}
export default LoginFacebook ;