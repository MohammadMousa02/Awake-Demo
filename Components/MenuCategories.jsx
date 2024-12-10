import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsArrowLeftCircleFill} from 'react-icons/bs';
import ScrollToTop from './BackToTop';

const MenuCategories = () => {
  const { category } = useParams(); // Get the category from the URL
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/menu/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (items.length === 0) {
    return <div>No items found for this category.</div>;
  }

  return (
      <div className="menuItemsContainer">
      <div className="homeBackButton">
        <a href="/menu"><BsArrowLeftCircleFill style={{fontSize:20}} /></a>
      </div>
      <h1>{category.toUpperCase().replace(/_/g, ' ')}</h1> {/* Display category name */}
      <div className="cardsContainer">
        {items.map((item) => (
          <div key={item.id} className="itemCard">
            <div className='itemImage'><img src={item.image} alt={item.name} /></div>
            <div className="itemDetails">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <span>Price : {item.price} JOD</span>
              <a href="https://www.talabat.com/jordan" className="orderNowBtn">Order Now</a>
            </div>
          </div>
        ))}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default MenuCategories;
