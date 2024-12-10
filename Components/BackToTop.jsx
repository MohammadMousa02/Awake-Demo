import React , {useState , useEffect} from "react";
import {FaAngleDoubleUp} from 'react-icons/fa';

const ScrollToTop =()=>{
    const [isVisible, setIsVisible] = useState(false);
    //Show the button when scroll down
    const toggleVisibility =()=>{
        if (window.scrollY > 100) {
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }};
    
    // Scroll to the top smoothly
    const scrollToTop =()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
      }, []);

    return(
        <a
        href="#"
        className={`btn back-to-top ${isVisible ? 'visible' : ''}`}
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          scrollToTop();
        }}
      >
        <FaAngleDoubleUp />
      </a>  
    );  
};

export default ScrollToTop;