import React from 'react';
import GitHubLogin from 'react-github-login';
import {useNavigate} from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';
import "./LoginGithub.css"


function Login() {
    const navigate = useNavigate();
  const onSuccess = (response) => {
    console.log(response);
    navigate('/player')
    console.log (" đã đanwg nhập thành công ")
    // Thực hiện các hành động cần thiết sau khi đăng nhập thành công
  };

  const onFailure = (response) => {
    console.error(response);
    
    // Thực hiện các hành động cần thiết sau khi đăng nhập thất bại
  };

  return (
    <div>
      <GitHubLogin
        clientId="e91dedc2e13465034d08"
        buttonText={
        <>
          <FaGithub className="github-icon" /> Login with GitHub
        </>
      }
        onSuccess={onSuccess}
        onFailure={onFailure}
        className="github-button"
     
      />
    </div>
  );
}

export default Login;
