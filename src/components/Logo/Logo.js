import React from "react";
import Tilty from 'react-tilty';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
      <div className='ma4 mt0'>
        <Tilty className="Tilty" options={{ max : 55 }} style={{ height: 200, width: 200 }}>
          <div className="Tilty-inner pa3">
            <img src={brain} style={{paddingTop: '5px', height: 150, width: 150}} alt="logo"/>
          </div>
        </Tilty>
      </div>
    )  
  }
  
  export default Logo;