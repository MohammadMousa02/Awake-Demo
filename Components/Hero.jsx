import React from 'react';
const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroContent'>
        <h1>Welcome to Awake, where every cup sparks a fresh start and vibrant energy!</h1>
        <p>
          At Awake, we believe that coffee is more than a beverage—it's an experience. 
          Whether you're here to kickstart your day, fuel your creativity, or unwind with 
          friends.
        </p>
      </div>
      <img src="./assets/coffee.png" alt="coffee" className='animatedCoffeePulse' />
    </div>
  );
};

export default Hero;