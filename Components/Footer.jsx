import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const footer = ()=>{
    return(
        <div id="footer">
            <div className="container">
                <div className="awake">
                    <h2>Awake</h2>
                    <h2>Awake</h2>
                </div>
                <div className="socialMedia">
                    <h2>Follow us on Social Media</h2>
                    <ul>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa-regular fa-envelope"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="copyRights">
                <p>© 2024 <a href="#">Awake</a>. All rights reserved.</p>
            </div>
        </div>
    );
}

export default footer;