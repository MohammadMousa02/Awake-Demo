import React from 'react';

const Services = () => {
  return (
    <div id="servicesSection">
      <h2>Our Services</h2>
      <div className="servicesWrapper">
        <div className="deliveryService">
          <img src="./assets/service-1.png" alt="" className="Service1" />
          <h3>Fastest Door Delivery</h3>
          <p>
            Awake ensures your favorite coffee reaches your 
            doorstep swiftly. Enjoy convenience and quality with our reliable delivery service.
          </p>
        </div>
        <div className="freashCoffeeBeansService">
          <img src="./assets/service-2.png" alt="" className="Service2" />
          <h3>Fresh Coffee Beans</h3>
          <p>
            We use only the freshest, premium coffee beans to create rich, aromatic brews. Taste 
            the difference in every sip at Awake.
          </p>
        </div>
        <div className="qualityService">
          <img src="./assets/service-3.png" alt="" className="Service3" />
          <h3>Best Quality Coffee</h3>
          <p>
            Awake is dedicated to crafting coffee with unmatched quality. Experience perfection 
            in every cup, made with care and expertise.
          </p>
        </div>
        <div className="bookingService">
          <img src="./assets/service-4.png" alt="" className="Service4" />
          <h3>Online Table Booking</h3>
          <p>
            Make your visit to Awake even more convenient with our online table booking. Secure your 
            spot effortlessly and enjoy your coffee without the wait.
          </p>
        </div>
      </div>
    </div>
  );
};



export default Services;