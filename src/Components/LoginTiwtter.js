import React from 'react';
import { useTwitterAuthentication } from 'react-twitter-auth';
import "./LoginTiwtter.css"

const TwitterLogin = () => {
    const { isAuthenticated, onClick } = useTwitterAuthentication({
      callbackUrl: 'http://localhost:3000', // Set your callback URL here
      consumerKey: '1651484484989243396-229Ri25kO1NJWQ0oLxJ2cNF1P7RSPj',
      consumerSecret: 'WsCQ3sCVZr9IscWGvt6OeF3JjZCeMuPZn71HNEEqm0QSa',
    });
  
    return (
      <div>
        {isAuthenticated ? (
          <div>Logged in with Twitter!</div>
        ) : (
          <button onClick={onClick}>Login with Twitter</button>
        )}
      </div>
    );
  };
  
  export default TwitterLogin;
  