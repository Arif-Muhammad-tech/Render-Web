import React from 'react'
import './loader.css'
import loader_gif from '../assets/images/Loader.gif'

function Loader() {
  return (
    <div className="loader-container">
      <img src={loader_gif} alt="Loading..." className="loader" />
    </div>
  );
}

export default Loader;
