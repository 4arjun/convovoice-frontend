import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css'

const Home = () => {

  const navigate = useNavigate(); // Use useNavigate

  const handleClick = () => {
    navigate('/process');
  };


  return (
    <div className='main-section'>
      <div>
        <h1>Welcome to ConvoVoice...</h1>
        <p>The tutor you needed is just a click away!</p>
        <p>Give it a try</p>
      </div>
      <button className='btn-processing' onClick={handleClick}>go to processing</button>
      <div className='pricing-container'>
        <div>
          <h2>Free trial(new users)</h2>
          <p>1Month </p>
          <p>5 requests per day</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
