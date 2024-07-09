import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate(); // Use useNavigate

  const handleClick = () => {
    navigate('/process');
  };


  return (
    <div>
      <div className='main-section'>
        <h1>Welcome to ConvoVoice</h1>
        <p>the tutor you needed is just a click away</p>
      </div>
      <button onClick={handleClick}>go to processing</button>
    </div>
  );
};

export default Home;
