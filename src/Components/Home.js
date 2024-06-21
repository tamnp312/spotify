import React from 'react'
import {useNavigate} from 'react-router-dom'
// import { accessUrl } from './Spotify'
import './Home.css'

function Home()
{
     const navigate=useNavigate()
     function handleClick() {
        navigate('/login');
      }
    return (
        
        <div className="home">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
            alt="Logo spotify"/>
            <button onClick={handleClick} >LOGIN WITH SPOTIFY</button>

            {/* <a href={accessUrl}>LOGIN TO SPOTIFY</a> */}
           
        </div>
    )
}
export default Home

