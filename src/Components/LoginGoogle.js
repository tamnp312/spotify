import React , {useEffect}  from "react";
import {GoogleLogin} from 'react-google-login'
import {useNavigate} from 'react-router-dom'
import {gapi} from 'gapi-script'
import "./LoginGoogle.css"
import { FaGoogle } from 'react-icons/fa';


const clientId='720851510968-m70h91ri3v1tl478umh5iln57g92a7vt.apps.googleusercontent.com';



function LoginGoogle() {
    
    const navigate = useNavigate();
    function handleGoogleLogin() {
        navigate('/player')
    }
    // const onLoginSuccess = (res) => {
    //     console.log('Login Success:', res.profileObj);
    //     console.log("đăg nhập thành công ")
    // };
   
    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };
    useEffect(() => {
       gapi.load("client:auth2", () => {
       gapi.auth2.init({clientId:clientId})
      })
     }, []);
    return (
      <div className="logingoogle">
        <GoogleLogin
          clientId={clientId}
          // buttonText="Login with google"
          onSuccess={handleGoogleLogin}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          // isSignedIn={true}
          render={props => (
        <button onClick={props.onClick} className="google-button">
          <FaGoogle className="google-icon" /> Login with Google
        </button>
      )}
        />
      </div>
    );  
}
export default LoginGoogle;