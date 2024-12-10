import React from "react";

const Clients =()=>{
    return(
        <div id="clientsSection">
            <h1>Our Clients</h1>
            <div className="clientsWrapper">
                <div className="Client Clients1">
                    <img src="./assets/client-1.jpg" alt="Client 1" />
                    <h3>Sara Khalil</h3>
                    <p>"I love the cozy vibe at Awake Coffee House. Their lattes and desserts are simply amazing!"</p>
                </div>
                <div className="Client Clients2">
                    <img src="./assets/client-2.jpg" alt="Client 2" />
                    <h3>Ahmad Al-Harbi</h3>
                    <p>"Awake Coffee House is my favorite spot for relaxing. The coffee is always fresh and full of flavor."</p>
                </div>
                <div className="Client Clients3">
                    <img src="./assets/client-3.jpg" alt="Client 3" />
                    <h3>Layla Nasser</h3>
                    <p>"The staff at Awake Coffee House are so friendly! Every visit feels like a little retreat from the busy world."</p>
                </div>
                <div className="Client Clients4">
                    <img src="./assets/client-4.jpg" alt="Client 4" />
                    <h3>Ali Al-Omari</h3>
                    <p>"Awake Coffee House has the best cold brews in town. It’s my go-to place for great coffee and a peaceful atmosphere."</p>
                </div>
            </div>
        </div>
    );

};

export default Clients;