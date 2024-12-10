import React , { useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftCircleFill , BsArrowRightCircleFill } from 'react-icons/bs';
import ScrollToTop from './BackToTop';
const Menu = () => {
  const [data, setData] = useState([]); // initialized value "data" with an empty array
  useEffect(()=>{
    fetch('http://localhost:3000/menu')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  } , [])

  {/* useNavigate */}
  const navigate = useNavigate();
  const handleNavigate = (name) => {
    const formattedUrl = name.toLowerCase().replace(/\s+/g, '_');
    navigate(`/menu/${formattedUrl}`);
  }

  {/* to control the slide state : */}
  const [slide, setSlide] = useState(0);

  const nextSlide = ()=>{
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  }

  const prevSlide = ()=>{
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  }

  useEffect(()=>{
    const handleKeyDown = (event)=>{
      if (event.key==="ArrowRight") {
        nextSlide();
      } else if(event.key==="ArrowLeft"){
        prevSlide();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  } , [nextSlide,prevSlide]);

  useEffect(()=>{
    const enterHandler = (event)=>{
      if (event.key==="Enter") {
        handleNavigate(data[slide]?.name);
      }
    }
    window.addEventListener("keydown", enterHandler);
    return () => {
      window.removeEventListener("keydown", enterHandler);
    };  
  },[handleNavigate, slide , data]);
  
  return (
    <>
      <div className="homeBackButton">
        <a href="/"><BsArrowLeftCircleFill style={{fontSize:20}} /></a>
      </div>
      <div id="menuSection">
          <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
          {data.map((item, index) =>{
            return (
              <div key={index}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  onClick={() => handleNavigate(item.name)}
                  className={slide===index ? "slide" : "slide slide-hidden" }
                />
                <button className={slide ===index ? "buttonUnderSlide" : "buttonUnderSlide buttonUnderSlide-hidden"} onClick={() => handleNavigate(item.name)} >
                  <span className='faulty-letter'>{item.name}</span>
                </button>
              </div>
            )
          })}
          <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
          <div className="indicators">
            {data.map((item, index) =>{
              return <button key={index} onClick={() => setSlide(index)} className={slide===index ? "indicator" : "indicator indicator-inactive" }></button>
            })}
          </div>
        <ScrollToTop/>
      </div>
  
    </>
    
  );
};

export default Menu;
